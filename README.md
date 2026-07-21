# Kiwi Defence — Hands-On Cybersecurity Certification Platform

## Getting Started

```bash
cp .env.example .env.local   # edit with your credentials
npm install
npm run dev
```

## Deployment

### GitHub Pages (static — no API routes)

Push to `master` — the GitHub Actions workflow at `.github/workflows/deploy-pages.yml` builds a static export and deploys to Pages.

**Limitations on static export:** API routes (`/api/auth/*`), the proxy (middleware), and server-side auth validation do not run. The site will render but login/auth won't function.

### Server (full functionality)

For a VPS, Vercel, or any Node.js host:

```bash
npm run build
npm start
```

Requires `AUTH_EMAIL`, `AUTH_PASSWORD`, `AUTH_NAME`, and `AUTH_SECRET` env vars.
