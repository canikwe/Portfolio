# Portfolio

Source for [chineanikwe.com](https://www.chineanikwe.com). Built with [Next.js](https://nextjs.org) as a static export and deployed to GitHub Pages.

## Requirements

Node.js 22 (pinned in `.nvmrc`; run `nvm use` in the project folder).

## Scripts

### `npm run dev`

Runs the site locally at [http://localhost:3000](http://localhost:3000), reloading as you edit.

### `npm run build`

Builds the static site into the `out` folder.

### `npm run typecheck`

Checks the TypeScript without building.

### `npm test`

Runs the Jest and React Testing Library tests in `__tests__/`.

### `npm run deploy`

Builds the site, then pushes `out` to the `gh-pages` branch, which GitHub Pages serves. The custom domain comes from `public/CNAME`.

## Editing content

All copy and settings are in `content/site.ts`, including the switches that show or hide the Projects and Blog sections.
