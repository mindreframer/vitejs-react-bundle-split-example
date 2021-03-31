### Minimal dependency-free showcase for code-splitting in Vite.js (v2) + React

- uses convention to load pages (/pages/Page\*.tsx)
- generates the pagesMap.ts file (to keep the mapping automated) - `yarn gen:pageMap`
- provides a loading component

### Useful links:

- https://vitejs.dev/guide/features.html#glob-import
- https://github.com/mrmlnc/fast-glob#pattern-syntax
- https://twitter.com/youyuxi/status/1351355267296993280 (With import.meta.glob you don't really need plugins for Next/Nuxt-style file-system routing in Vite - and it works with SSR already )
- https://github.com/vitejs/vite/issues/1875

### Alternatives, that did not work out (still useful to see the concepts)

⏳ A higher order component for loading components with promises.

- https://github.com/jamiebuilds/react-loadable
