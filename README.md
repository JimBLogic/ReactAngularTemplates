
# Frontend Component Library

This repository contains a curated set of React and Angular UI components styled with Tailwind CSS, designed for real-world business applications.

## Component Sets

**Cyberpunk Theme**
- Authentication form (React)
- Dashboard (React & Angular)
- Landing page (React & Angular)
- Contact form (React & Angular)
- User profile (React & Angular)
- Data table (React & Angular)

**Modern Theme**
- Authentication form (React)
- Analytics dashboard (React & Angular)
- Landing page (React & Angular)
- Contact form with validation (React & Angular)
- User profile (React & Angular)
- Data table (React & Angular)

**Classic Theme**
- Authentication form (React)
- Dashboard (React)
- Landing page (React)
- Contact form (React)
- User profile (React)
- Data table (React)

## Getting Started

1. Install exactly the checked-in dependency lockfile: `npm ci` (Node.js 22 or 24 recommended).
2. Preview examples by opening `component-viewer.html` in your browser.
3. Run `npm run validate` and `npm test` to check repository types and integrity contracts.
4. Copy and adapt components into your **own** React/Angular project with an appropriate toolchain.

## Requirements

- Node.js 22 or 24 recommended for maintaining this repository (older runtimes are no longer targeted by CI).
- React 18+ or Angular 15+
- Tailwind CSS 3.3+
- TypeScript 5.0+

## Features

- Responsive layouts
- Accessibility best practices
- Input validation
- Multi-language support (EN, ES, JA, UR)

## Testing

```bash
npm ci            # Locked dependencies
npm run validate  # Type check
npm test          # Repository integrity checks
npm run build     # Type check only; does not emit a website
```

This repository is a **component catalog**, not a complete deployable application: there is no real `npm start`, hosting endpoint, emitted production bundle or automated deployment. See `DEPLOYMENT.md` for integration guidance and `docs/SECURITY_AUDIT_2026-10-16.md` for audit evidence.

---

**Version**: 2.0 | **License**: MIT