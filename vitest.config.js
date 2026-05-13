import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import {playwright} from "@vitest/browser-playwright";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    setupFiles: [
      "./setup-file.js"
    ],
    browser: {
      enabled: true,
      provider: playwright(),
      // https://vitest.dev/config/browser/playwright
      instances: [
        {
          browser: "chromium"
        },
        {
          browser: "firefox"
        },
        {
          browser: "webkit"
        }
      ],
    },
  }
})
