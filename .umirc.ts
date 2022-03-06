import routes from './config/routes';
import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  history: { type: 'hash' },
  hash: true,
  title: 'Keer Blog',
  routes: routes,
  define: {
    API_PREFIX: '',
  },
  extraBabelPlugins: [
    [
      'import',
      {
        libraryName: 'lodash',
        libraryDirectory: '',
        camel2DashComponentName: false,
      },
      'lodash',
    ],
  ],
  fastRefresh: {},
});
