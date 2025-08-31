
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://ragnarloki.github.io/vsynapTech/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/vsynapTech"
  },
  {
    "renderMode": 2,
    "route": "/vsynapTech/comming-soon"
  },
  {
    "renderMode": 2,
    "redirectTo": "/vsynapTech",
    "route": "/vsynapTech/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 754, hash: 'f47a2f87921e8c1b4ec231cc399baf84ce1a5f528f90e90a0c5213c3f1e4ee6a', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1098, hash: 'a791d82fbef5ecf8603ae7805a6e8ac96bf1d3e1b86271c786c482bb627e725b', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 7220, hash: 'ee9e3d9c47d238d08cf999ae9757b1554c94e000895eec6ba7b7a85dfa67602b', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'comming-soon/index.html': {size: 5293, hash: '65b51dc1e443a761fc8eeb5b27cea4f6b4e36aa1cc49330e068ea59178e63214', text: () => import('./assets-chunks/comming-soon_index_html.mjs').then(m => m.default)},
    'styles-IK3TWPUB.css': {size: 26097, hash: 'XzZcxBwHm4w', text: () => import('./assets-chunks/styles-IK3TWPUB_css.mjs').then(m => m.default)}
  },
};
