export const imports = {
  'src/docs/about.md': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "src-docs-about" */ 'src/docs/about.md'
    ),
  'src/docs/button.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "src-docs-button" */ 'src/docs/button.mdx'
    ),
  'src/docs/getting-started.md': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "src-docs-getting-started" */ 'src/docs/getting-started.md'
    ),
  'src/docs/index.md': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "src-docs-index" */ 'src/docs/index.md'
    ),
}
