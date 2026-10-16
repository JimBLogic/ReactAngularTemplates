# Template integration guide (no standalone deployment)

This repository distributes **source components**, not a complete React or Angular app. `npm run build` runs `tsc --noEmit` and intentionally does **not** create `build/`, `dist/` or deployable static files. There is no `npm start` server.

## Reproducible local checks

On Node.js 22 or 24:

```bash
npm ci
npm run validate
npm test
npm run build
```

Open `component-viewer.html` in a browser to inspect the static examples. This preview alone does not test the components in a real app, and no browser automation or accessibility certification is claimed.

## Using the components

Create an independent, maintained React or Angular project, using that framework's supported tooling and versions. Copy an individual source component and its relevant styles/assets from `Template1/`, `Template2/` or `Template3/`; adapt imports, peer dependencies, translations, validation and Tailwind configuration in the **consumer** project.

For React, ensure the host's React/ReactDOM and Tailwind versions match its own toolchain. For Angular, HTML examples require adaptation into a properly configured Angular component/module and are not independently executable applications.

The consumer app is responsible for its own authentication, API secrets, CSP, input validation, testing, image/accessibility QA, bundling and deployment.

## Docker / production

Do not treat the previous Node 18 Docker example as a supported production release for this repository. Because no web server or bundler is included, running `npm start` in a Docker container cannot serve these templates.

If you build a separate app from the components, use **that app's** documented build, tests, runtime, supported LTS Node version, HTTPS/reverse proxy configuration and deployment strategy. Never include private `.env` files or secrets in a frontend bundle.

## Security and scope

The audit candidate fixes CI reproducibility and truthfulness only; it does not promise that copied components are vulnerability-free, production-ready or accessibility-certified. See `docs/SECURITY_AUDIT_2026-10-16.md`.
