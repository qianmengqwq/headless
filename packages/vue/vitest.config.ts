import { resolve } from 'node:path'
import { defineConfig } from 'vitest/config'
import Vue from '@vitejs/plugin-vue'

const r = (p: string) => resolve(__dirname, p)

export default defineConfig({
  plugins: [Vue()],
  resolve: {
    alias: {
      '@': r('./src'),
    },
  },
})
