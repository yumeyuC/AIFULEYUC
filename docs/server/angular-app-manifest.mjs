
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/login"
  },
  {
    "renderMode": 2,
    "route": "/yu"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 543, hash: 'a674ccf3ff8f2c21bcb7225b0378598a86d1f1723653a9a47b3686544b0fea46', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1056, hash: '1dff36b761153098568813e5b0b52bd31d665bdcb98ac3fd3416c2301875c8eb', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'yu/index.html': {size: 832, hash: '62dd76186a5950380c6492f22b5e41ec7e4d0a70809eb8246b6bb5c8ad42d89d', text: () => import('./assets-chunks/yu_index_html.mjs').then(m => m.default)},
    'login/index.html': {size: 5851, hash: '54f03d121698e7efcfecb028ab5e4c81aeec5d3ff70ac5bd8e4aff808d075800', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'index.html': {size: 832, hash: '62dd76186a5950380c6492f22b5e41ec7e4d0a70809eb8246b6bb5c8ad42d89d', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
