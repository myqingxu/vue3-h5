import vue from '@vitejs/plugin-vue';
import Components from 'unplugin-vue-components/vite';
import {
  VantResolver
} from 'unplugin-vue-components/resolvers';
import {
  resolve
} from 'path';
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: [VantResolver()],
    }),
  ],
  resolve: {
    alias: [{
      find: '@',
      replacement: resolve(__dirname, 'src')
    }],
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/globalVar.scss";`
      }
    }
  }
});