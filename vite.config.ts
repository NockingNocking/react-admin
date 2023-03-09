import { UserConfigExport, ConfigEnv } from 'vite'
import react from '@vitejs/plugin-react'
import { viteMockServe } from 'vite-plugin-mock'
import { resolve } from 'path'

export default ({ command }: ConfigEnv): UserConfigExport => {
  return {
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src')
      }
    },

    plugins: [
      react(),
      viteMockServe({
        mockPath: 'mock',
        localEnabled: command === 'serve'
      })
    ],
    build: {
      sourcemap: true
    },
    server: {
      proxy: {
        '/api': {
          target: 'https://www.fastmock.site/mock/bf2f26568ba45c7362bbe1c850b62048/api',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, '')
        }
      }
    }
  }
}
