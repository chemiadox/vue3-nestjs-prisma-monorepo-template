import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import dotenv from 'dotenv';
import tsconfigPaths from 'vite-tsconfig-paths';
import checker from 'vite-plugin-checker';

dotenv.config({ path: path.resolve(__dirname, '../../.env') });

export default defineConfig({
  root: path.resolve(__dirname),
  plugins: [
    vue(),
    tsconfigPaths({
      projects: [path.resolve(__dirname, 'tsconfig.json')],
    }),
    checker({
      typescript: {
        tsconfigPath: path.resolve(__dirname, 'tsconfig.checker.json'),
      },
      vueTsc: {
        tsconfigPath: path.resolve(__dirname, 'tsconfig.checker.json'),
      },
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@common': path.resolve(__dirname, '../../packages/types/src'),
      '@utils': path.resolve(__dirname, '../../packages/utils/src'),
    },
  },
  build: {
    sourcemap: false,
    outDir: path.resolve(__dirname, '../../dist/apps/fe-core'),
    emptyOutDir: true,
  },
  server: {
    port: parseInt(process.env.DEV_FE_CORE_PORT!),
    open: true,
  },
});
