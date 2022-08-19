import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import svgrPlugin from 'vite-plugin-svgr';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  // This changes the out put dir from dist to build
  // comment this out if that isn't relevant for your project
  const env = loadEnv(mode, process.cwd(), '');
  return {
    build: {
      outDir: 'build',
    },
    plugins: [
      react(),
      svgrPlugin({
        svgrOptions: {
          icon: true,
        },
      }),
    ],
    esbuild: {
      target: 'esNext',
    },
    define: {
      VITE__: env,
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.jsx', '.js'],
      alias: {
        '@': resolve(__dirname, '/src'),
        '@apis': resolve(__dirname, '/src/Apis'),
        '@services': resolve(__dirname, '/src/services'),
        '@utils': resolve(__dirname, '/src/utils'),
      },
    },
  };
});
