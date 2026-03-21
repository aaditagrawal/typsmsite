# typsmthng website

Product showcase website for [typsmthng](https://typsmthng.coolstuff.work) - a modern Typst editor for the web and desktop.

## Stack

- [Astro](https://astro.build) // static site generation
- [React](https://react.dev) // interactive components
- [Tailwind CSS 4](https://tailwindcss.com) // styling
- [Motion](https://motion.dev) // scroll animations
- [shadcn/ui](https://ui.shadcn.com) // component primitives

## Structure

```
apps/web/          # Astro site
  src/
    components/    # React components (navbar, hero, features, etc.)
    layouts/       # Astro layouts
    pages/         # Routes
  public/
    screenshots/   # Product screenshots
packages/ui/       # Shared UI components + design tokens
  src/
    styles/        # globals.css with theme tokens
    components/    # shadcn/ui components
```

## Development

```bash
bun install
bun run dev
```

## Build

```bash
bun run build
```

## Adding shadcn/ui components

```bash
bunx shadcn@latest add <component> -c apps/web
```
