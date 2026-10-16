# ReactAngularTemplates — security and reproducibility candidate (2026-10-16)

**Repo:** public `JimBLogic/ReactAngularTemplates`. **Source baseline:** `main` commit `aae4474540a966608c7d0e46aa13179ce24a06fb`; **branch:** `audit/template-ci-integrity-20261016`. DRAFT only: **no merge, deployment or public-page changes**.

## Source-confirmed findings

- `.github/workflows/ci.yml` used movable first-party Actions labels (`checkout@v4`, `setup-node@v4`), runners `ubuntu-latest`, unsupported Node.js 18 and Node.js 20, and `npm install` instead of an immutable lockfile install. No prior workflow run was returned for this fork-independent repository at audit time; existence of YAML is not evidence of prior success.
- `package.json` had `npm test` as an echo placeholder, `npm run build` as a TypeScript **no-emit** type check, and no `npm start`; `README.md` and `DEPLOYMENT.md` nevertheless described a production app build/start and Docker hosting. That is a verifiable capability/documentation mismatch, not a proven security exploit.
- `package-lock.json` v3 pins dependency versions with npm registry URLs and integrity values. Moving package versions without a verified lock is forbidden.
- Some older template files are labeled `.old.tsx`, and select example components are stubs. Do not claim this catalog is production ready or automatically convert it into a deployed app.

## Candidate controls

- Upgrade GitHub Actions to exact verified official full commit SHAs for `checkout v7` and `setup-node v7` (Node24 action runtime), fix runner to Ubuntu 24.04 and run tests against Node 22/24 with read-only token and no persistent checkout credentials.
- Replace `npm install` with `npm ci --ignore-scripts`, use existing lockfile and fail CI on current high/critical production dependency advisories with `npm audit --omit=dev --audit-level=high`.
- Replace placeholder npm test with four Node native dependency-free repository/CI assertions: component-library scope, exact dependency+lock congruence and integrity, immutable Actions/permission restrictions, supported CI versions and npm audit gate.
- Correct README, preview script and deployment guide to distinguish an editable component catalog from an application bundle. No framework migration, deployment config or user data touched.

## Evidence gates

Candidate GitHub PR CI to be verified using exact run IDs, job logs and head SHA. If CI finds pre-existing TypeScript or npm vulnerabilities, record them as unresolved rather than claiming a pass or suppressing the failing security check. Scope remains DRAFT. No actual browser/mobile QA or consumer-app integration is performed.
