
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: undefined,
  assets: {
    'index.csr.html': {size: 706, hash: '2b93983db0323a1de99734f3f93fad825d5070d778eeb4744f47a56da1f40d1d', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1009, hash: 'ac38ed7af53e50f70f6ebe414ea958f49ccba3fe83e5f12c7a0c005ae29ef4a8', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-SPT32HZK.css': {size: 108, hash: 'n+PNe7ENJS0', text: () => import('./assets-chunks/styles-SPT32HZK_css.mjs').then(m => m.default)}
  },
};
