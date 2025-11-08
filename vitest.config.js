import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    include: ['tests/**/*.spec.js'],
    environment: 'node',
    watcher: false,
    coverage: {
      provider: 'v8',
      reporter: ['text', 'html', 'json'],
      reportsDirectory: 'coverage',
      include: ['lib/**/*.js', 'little-engine.js'],
      exclude: ['tests/**']
    }
  }
})
