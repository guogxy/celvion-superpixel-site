# Celvion SuperPixel website

Official bilingual product, privacy, license, terms, and support website for
Celvion SuperPixel. This directory does not contain the iOS application source.

The website uses the shipping App icon from the parent iOS project without
redesigning it. The Real-ESRGAN license text is copied from the App's bundled
third-party notices so the website and App remain consistent.

## Local development

```bash
pnpm install
pnpm run dev
```

## Validation

```bash
pnpm run lint
pnpm run build
```

## GitHub Pages

The production site is a static export served from the `gh-pages` branch of
the public `guogxy/celvion-superpixel-site` repository. The iOS repository
remains private and is not part of the Pages artifact.

```bash
pnpm run build:github
```
