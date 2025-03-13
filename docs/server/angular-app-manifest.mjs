
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
    'index.csr.html': {size: 543, hash: '9190e6846064b45fe027237e2a39b99a225635b1ae5f02b64584e37f7496f2c9', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1056, hash: 'ec2062237def725f658098f4d88c38bf4678d40b3749f6fbf71710de110dfe48', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'login/index.html': {size: 5851, hash: 'cda6ab15d6863fbc0a3f45d13b6018ab969ad1c1257e88d1ef7fd60b42ee370f', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'yu/index.html': {size: 832, hash: 'ded3623fcd47eac381875f541bd8c548e5f99d08141d35b8721c443d8c19a403', text: () => import('./assets-chunks/yu_index_html.mjs').then(m => m.default)},
    'index.html': {size: 832, hash: 'ded3623fcd47eac381875f541bd8c548e5f99d08141d35b8721c443d8c19a403', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
