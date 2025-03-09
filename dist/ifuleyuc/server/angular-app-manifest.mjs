
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
    'index.csr.html': {size: 543, hash: 'c268688ad8469e497da1a7c85b696c19754bb70a596dc7512b55edf04aa3c2e6', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1056, hash: '3849dcdce990e877af5c1333532d645f6ca2d1fc855e24815c7c95ae2a17d355', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'login/index.html': {size: 4622, hash: 'ac693818fe330d9f1a517c562a5b138ad45e3411f6427583f3f392c80cd2c71b', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'index.html': {size: 4622, hash: 'ac693818fe330d9f1a517c562a5b138ad45e3411f6427583f3f392c80cd2c71b', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'yu/index.html': {size: 4622, hash: 'ac693818fe330d9f1a517c562a5b138ad45e3411f6427583f3f392c80cd2c71b', text: () => import('./assets-chunks/yu_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
