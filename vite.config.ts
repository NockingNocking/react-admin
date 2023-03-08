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
    build: {
      sourcemap: true
    },
    plugins: [
      react(),
      viteMockServe({
        mockPath: 'mock',
        localEnabled: command === 'serve'
      })
    ]
  }
}
