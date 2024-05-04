/*
 * @Author: PengChaoQun 1152684231@qq.com
 * @Date: 2024-05-02 11:12:51
 * @LastEditors: PengChaoQun 1152684231@qq.com
 * @LastEditTime: 2024-05-04 21:05:24
 * @FilePath: /pcq-vue3-startup/vite.config.ts
 * @Description:
 */
import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

export default (data: any) => {
  const modeConfig = loadEnv(data.mode, process.cwd());

  return defineConfig({
    define: {
      // 是否全局启用mock
      _EnableGlobalMock: false,
      // 是否允许mock调试
      _EnableMockDebug: true
    },
    // 部署静态页面base路径需要用 ./
    base: './',
    build: {
      // outDir: 'dist'
    },
    plugins: [
      vue()
      // vueJsx()
    ],
    server: {
      hmr: true,
      proxy: {
        '/api': {
          target: 'http://localhost:3000/',
          changeOrigin: true,
          rewrite: path => path.replace(/^\/api/, '')
        }
      }
    },
    resolve: {
      alias: [
        {
          find: '@',
          replacement: path.resolve('./src')
        },
        {
          find: '@views',
          replacement: path.resolve('./src/views/')
        }
      ]
    }
  });
};
