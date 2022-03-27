import { IConfig } from 'umi'

const config: IConfig = {
  define: {
    API_PREFIX: 'http://localhost:9001',
  },
  proxy: {
    '/api': {
      target: 'http://localhost:9001',
      changeOrigin: true,
      pathRewrite: { '^/api': '' },
    },
  },
}

export default config
