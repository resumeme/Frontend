import react from '@vitejs/plugin-react-swc';
import path from 'path';
import { defineConfig } from 'vite';
import { splitVendorChunkPlugin } from 'vite';
import vitePluginFaviconsInject from 'vite-plugin-favicons-inject';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    vitePluginFaviconsInject('./src/assets/favicon.png'),
    splitVendorChunkPlugin(),
  ],
  resolve: {
    alias: [{ find: '~', replacement: path.resolve(__dirname, 'src') }],
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id: string) {
          const match =
            /react-router|react-router-dom|tanstack|chakra|react-icons|react-hook-form|zustand|emotion|react-md-editor|react|framer-motion|axios|react/.exec(
              id,
            );
          if (match) {
            return match[0];
          }
        },
      },
    },
  },
});
