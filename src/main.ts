/*
 * @Author: PengChaoQun 1152684231@qq.com
 * @Date: 2024-05-02 11:12:51
 * @LastEditors: PengChaoQun 1152684231@qq.com
 * @LastEditTime: 2024-05-02 13:46:07
 * @FilePath: /pcq-vue3-startup/src/main.ts
 * @Description:
 */
import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import { createPinia } from 'pinia';
import router from './router/index';

import { setupMockServer } from './mock/mock-server';

// 开发环境运行模拟数据
if (process.env.NODE_ENV === 'development') {
  setupMockServer();
}

// 生产环境的mock模式下运行模拟数据
if (process.env.NODE_ENV === 'production' && import.meta.env.MODE == 'mock') {
  setupMockServer();
}

// 引入样式
import './assets/theme/index.less';

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount('#app');
