import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, './src/index.ts'),
      name: 'buibui',
      fileName: (format) => `buibui.${format}.js`,
    },
  },
});
