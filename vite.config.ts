import path from 'node:path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

const Constants = {
  PORT: 4200,
  OUTPUT_DIR: './dist',
} as const;

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '.', 'src'),
    },
  },
  preview: {
    port: Constants.PORT,
    open: `http://localhost:${Constants.PORT}`,
  },
  server: {
    port: Constants.PORT,
    open: `http://localhost:${Constants.PORT}`,
  },
  build: {
    emptyOutDir: true,
    rollupOptions: {
      treeshake: true,
      output: {
        dir: Constants.OUTPUT_DIR,
        entryFileNames: 'entry-[hash].js',
        chunkFileNames: 'chunk-[hash].js',
        assetFileNames: 'asset-[hash].[ext]',
      },
    },
  },
  define: {
    'import.meta.env.VITE_APP_VERSION': JSON.stringify(process.env.npm_package_version),
  }
});
