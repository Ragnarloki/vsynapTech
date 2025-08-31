
export default {
  basePath: 'https://ragnarloki.github.io/vsynapTech',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
