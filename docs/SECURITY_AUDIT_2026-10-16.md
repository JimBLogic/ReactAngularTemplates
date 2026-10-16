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
- Replace placeholder npm test with five Node native dependency-free repository/CI assertions: component-library scope, exact dependency+lock congruence and integrity, immutable Actions/permission restrictions, supported CI versions and npm audit gate.
- Correct README, preview script and deployment guide to distinguish an editable component catalog from an application bundle. No framework migration, deployment config or user data touched.

## Evidence gates

Candidate GitHub PR CI to be verified using exact run IDs, job logs and head SHA. If CI finds pre-existing TypeScript or npm vulnerabilities, record them as unresolved rather than claiming a pass or suppressing the failing security check. Scope remains DRAFT. No actual browser/mobile QA or consumer-app integration is performed.

## CI discovery: legacy archive is not an active build input

First candidate [GitHub Actions #38864627270](https://github.com/JimBLogic/ReactAngularTemplates/actions/runs/38864627270) revealed **TS2307** from the two archived `DashboardTailwindReact.old.tsx` imports of non-existent `../devsecops-security`. No security module was invented and no archived component was removed. The TypeScript project now explicitly excludes archived `Template1/**/*.old.tsx` and `Template2/**/*.old.tsx` while validating current `.tsx` files. The historical sources are retained **unvalidated** and must not be copied as working secure components without a separate migration. This change still requires fresh CI.
## Follow-up CI result: direct dependency range drift

[CI #38864754919](https://github.com/JimBLogic/ReactAngularTemplates/actions/runs/38864754919) passed active TypeScript validation but exposed a **real root package/lock discrepancy**: `package.json` declared React and ReactDOM `>=18.0.0`, whereas the committed lockfile declares `^18.2.0`. The candidate explicitly aligns the package manifest to the already locked React 18.2 range, retaining React 18-focused types and the permissive **peerDependency** ranges for consumers. This is a reproducibility decision, not a React19 migration or a new generated bundle. Reverify in subsequent CI.

## Development dependency exposure detected by real CI

[Run #38864887223](https://github.com/JimBLogic/ReactAngularTemplates/actions/runs/38864887223) confirmed TypeScript and **5/5 contract tests per Node version** and **0 npm vulnerabilities in production-only packages**. However the `npm ci` installation reports **16 total advisories (13 high, 3 moderate)** among all dependencies, which likely includes development tooling. Candidate CI now includes an explicitly labeled **full npm audit advisory** step to surface details without claiming an all-green supply-chain posture. Until separately patched and fully tested, the dev toolchain remains a documented security backlog; the no-deploy component catalog is not declared production-certified.

## Compatible transitive dependency remediation — real GitHub evidence

- A full-toolchain audit in [CI #38865150213](https://github.com/JimBLogic/ReactAngularTemplates/actions/runs/38865150213) identified **16 affected package entries: 13 high, 3 moderate**. Production `npm audit --omit=dev --audit-level=high` detected **0**. Vulnerabilities were concentrated in the development/build ecosystem (Tailwind CSS 3, transitive glob, PostCSS, browserslist and others), not a demonstrably exploitable deployed application.
- [Isolated lockfile experiment #38865353307](https://github.com/JimBLogic/ReactAngularTemplates/actions/runs/38865353307): both read-only resolution and single-file candidate-branch writer jobs SUCCESS. `npm audit fix --package-lock-only --ignore-scripts` (**without --force**) updated only npm-compatible transitive packages and produced a lockfile that passed `npm ci`, active TypeScript checks, **5/5 repository tests**, and production audit with **0 findings**.
- The full toolchain audit improved to **7 affected package entries: 5 high, 2 moderate**. Current candidate lock includes Tailwind **3.4.19**, PostCSS **8.5.30**, source-map-js **1.2.2**, and Browserslist **4.29.3**. Remaining high-severity advisory chain points to Tailwind v3 and glob dependencies; npm recommends **Tailwind v4.3.3** for a complete major-version fix. **Do not force-upgrade to Tailwind 4** without migrating classes/config, validating real components, and performing browser/mobile QA.
- The one-shot branch writer was **removed** from the final PR diff. It did not touch main, publish, or deploy. The permanent CI still reports all-dependency audit results under an explicitly labeled **advisory** step; a green production audit is **not** a full-toolchain security clearance.
- The final candidate PR run after removal must pass before any GO-for-review claim. Due to unresolved dev tooling advisories, recommend NO-GO for packaging these templates as a broadly trusted production build toolchain.
