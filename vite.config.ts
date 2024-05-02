/*
 * @Author: PengChaoQun 1152684231@qq.com
 * @Date: 2024-05-02 11:12:51
 * @LastEditors: PengChaoQun 1152684231@qq.com
 * @LastEditTime: 2024-05-02 13:15:48
 * @FilePath: /pcq-vue3-startup/vite.config.ts
 * @Description: 
 */
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    // 是否全局启用mock
    _EnableGlobalMock: true,
    // 是否允许mock调试
    _EnableMockDebug: false
  },
  plugins: [vue()]
});