import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const pkg = JSON.parse(readFileSync('package.json', 'utf8'));
const lock = JSON.parse(readFileSync('package-lock.json', 'utf8'));
const workflow = readFileSync('.github/workflows/ci.yml', 'utf8');

test('repository is a component library and does not claim a deployable app script', () => {
  assert.equal(pkg.private, true);
  assert.equal(pkg.scripts.start, undefined);
  assert.match(pkg.scripts.build, /tsc --noEmit/);
  assert.doesNotMatch(pkg.scripts.build, /vite build|next build|react-scripts build/);
  assert.match(pkg.scripts.preview, /component-viewer\.html/);
});

test('tracked npm lock matches direct dependencies and uses integrity hashes', () => {
  assert.equal(lock.lockfileVersion, 3);
  assert.deepEqual(lock.packages[''].dependencies, pkg.dependencies);
  assert.deepEqual(lock.packages[''].devDependencies, pkg.devDependencies);
  for (const [path, meta] of Object.entries(lock.packages)) {
    if (path === '' || meta.link) continue;
    assert.ok(typeof meta.integrity === 'string' && meta.integrity.startsWith('sha512-'), path);
    assert.ok(typeof meta.resolved === 'string' && meta.resolved.startsWith('https://registry.npmjs.org/'), path);
  }
});

test('active catalog typecheck excludes only archived .old.tsx components', () => {
  const tsconfig = JSON.parse(readFileSync('tsconfig.json', 'utf8'));
  assert.ok(tsconfig.include.some(x=>x.startsWith('Template1/')));
  assert.ok(tsconfig.include.some(x=>x.startsWith('Template2/')));
  assert.ok(tsconfig.exclude.includes('Template1/**/*.old.tsx'));
  assert.ok(tsconfig.exclude.includes('Template2/**/*.old.tsx'));
});

test('CI uses immutable official Actions revisions and has no publication rights', () => {
  const actionUses = [...workflow.matchAll(/^\s+uses:\s+([^\s#]+)/gm)].map(x => x[1]);
  assert.equal(actionUses.length, 2);
  for (const value of actionUses) assert.match(value,/^actions\/[a-z-]+@[0-9a-f]{40}$/);
  assert.match(workflow, /permissions:\s*\n\s+contents: read/);
  assert.match(workflow, /persist-credentials: false/);
  assert.doesNotMatch(workflow, /contents: write|pages: write|id-token: write|pull_request_target|workflow_run:/);
});

test('CI checks Node 22 and 24, uses npm ci and fail-closed audit', () => {
  assert.match(workflow, /ubuntu-24\.04/);
  assert.match(workflow, /node-version: \['22', '24'\]/);
  assert.match(workflow, /npm ci --ignore-scripts/);
  assert.match(workflow, /npm run validate/);
  assert.match(workflow, /npm test/);
  assert.match(workflow, /npm audit --omit=dev --audit-level=high/);
  assert.match(workflow, /npm audit --audit-level=high/);
});
