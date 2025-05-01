import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '')
  return {
    plugins: [react()],
    base: env.VITE_BASE_URL,
    server: {
      host: '0.0.0.0', // 내부 IP 접근 허용
      port: 5173 // 기본 포트
    },
    build: {
      outDir: 'dist',
      assetsDir: 'assets',
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ['react', 'react-dom'],
            slider: ['react-slick']
          }
        }
      }
    }
  }
})
