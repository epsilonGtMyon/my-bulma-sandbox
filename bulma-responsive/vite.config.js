const { resolve } = require('path')

import { defineConfig } from "vite";

export default defineConfig(({ command, mode }) => {
  console.log("-----vite.config.js------");
  console.log({ command, mode });
  return {
    server: {
      open: true,
    },
    build: {
      rollupOptions: {
        //MPAでビルドする設定
        //https://vitejs.dev/guide/build.html#multi-page-app
        input: {
          main: resolve(__dirname, 'index.html'),
          sandbox01: resolve(__dirname, 'sandbox01/index.html'),
          sandbox02: resolve(__dirname, 'sandbox02/index.html'),
          sandbox03: resolve(__dirname, 'sandbox03/index.html')
        }
      }
    }
  };
});
