import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import vuetify from "vite-plugin-vuetify";
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [
    vue(),
    vuetify({
      autoImport: true,
    }),
    dts({
      insertTypesEntry: true,
      copyDtsFiles: true,
      outDir: 'dist',
    }),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'CitrusVuetifyComponents',
      fileName: (format) => `index.${format === 'es' ? 'js' : 'umd.cjs'}`,
      formats: ['es', 'umd'],
    },
    rollupOptions: {
      external: ['vue', 'vuetify'],
      output: {
        globals: {
          vue: 'Vue',
          vuetify: 'Vuetify',
        },
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === 'style.css') {
            return 'index.css';
          }
          return assetInfo.name as string;
        },
      },
    },
    sourcemap: true,
    emptyOutDir: true,
  },
});
