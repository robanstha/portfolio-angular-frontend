
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: undefined,
  assets: {
    'index.csr.html': {size: 708, hash: '19dff38ec596d39ebc1113791c9eb75ddd6bbd64506614ec61000adca384d36f', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1011, hash: 'bd10c19b9e9d804aafa9c36f39addbbb61a05d430737b3f809db652262d6fd46', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-SPT32HZK.css': {size: 108, hash: 'n+PNe7ENJS0', text: () => import('./assets-chunks/styles-SPT32HZK_css.mjs').then(m => m.default)}
  },
};
