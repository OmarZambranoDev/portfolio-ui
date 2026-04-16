# Dependency Version Manifest

This file tracks the locked stable versions used across all portfolio micro-frontend projects.

## Core Framework

| Package | Version | Purpose |
|---------|---------|---------|
| react | 18.2.0 | Core framework |
| react-dom | 18.2.0 | DOM rendering |
| typescript | 5.2.2 | Type safety |

## Styling

| Package | Version | Purpose |
|---------|---------|---------|
| tailwindcss | 3.4.17 | Utility-first CSS |
| postcss | 8.4.31 | CSS processing |
| autoprefixer | 10.4.16 | Vendor prefixes |
| class-variance-authority | 0.7.0 | Component variant management |

## Build Tools

| Package | Version | Purpose |
|---------|---------|---------|
| tsup | 8.0.0 | TypeScript bundler (UI library) |
| vite | 5.0.0 | Build tool for Vite remotes |
| next | 14.2.0 | Host app + Next.js remotes |

## Development Tools

| Package | Version | Purpose |
|---------|---------|---------|
| storybook | 8.6.14 | Component development |
| @storybook/react-vite | 8.6.14 | Storybook Vite integration |
| eslint | 8.57.0 | Linting |
| prettier | 3.1.0 | Code formatting |
| @typescript-eslint/eslint-plugin | 6.13.0 | TypeScript ESLint plugin |
| @typescript-eslint/parser | 6.13.0 | TypeScript ESLint parser |

## Type Definitions

| Package | Version | Purpose |
|---------|---------|---------|
| @types/react | 18.2.0 | React types |
| @types/react-dom | 18.2.0 | React DOM types |
| @types/node | 20.0.0 | Node.js types |

## Environment

| Tool | Version |
|------|---------|
| Node.js | 20.19.5 |
| npm | 10.8.2 |

## Current UI Library Version

| Package | Version |
|---------|---------|
| @portfolio/ui | 0.0.3 |

---

**All projects in this portfolio MUST use these exact versions to ensure compatibility across the polyrepo architecture.**