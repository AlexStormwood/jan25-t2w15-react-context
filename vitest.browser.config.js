import { defineConfig } from 'vitest/config'
import { playwright } from '@vitest/browser-playwright'
import react from '@vitejs/plugin-react'

// don't specifically need this because vitest.config.js covers it all already!!!
// this file was made automatically by the `npx vitest init browser` command
export default defineConfig({
  plugins: [react()],
  test: {
    browser: {
      enabled: true,
      provider: playwright(),
      // https://vitest.dev/config/browser/playwright
      instances: [
      ],
    },
  },
})
