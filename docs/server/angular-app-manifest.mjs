
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
    'index.csr.html': {size: 543, hash: 'acecab214069d1a4205e6814ebd5f7e8ea743a96c79f1e9f2c67a6652902923c', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1056, hash: '49a3e1f097f1af2ada80be40a025adff2793f74f54652944f1a0a31fe77c953c', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 832, hash: '060abe55dd1cfea704f74959ecae351e7a592e1532424089064daa8fc3c3e89f', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'yu/index.html': {size: 832, hash: '060abe55dd1cfea704f74959ecae351e7a592e1532424089064daa8fc3c3e89f', text: () => import('./assets-chunks/yu_index_html.mjs').then(m => m.default)},
    'login/index.html': {size: 5851, hash: 'bcfa224d04504dcf3c701fb83102728a3f30f4d5ae89f45250175db9092e85bb', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
