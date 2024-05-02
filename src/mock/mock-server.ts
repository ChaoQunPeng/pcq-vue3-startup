/*
 * @Author: PengChaoQun 1152684231@qq.com
 * @Date: 2024-02-19 14:54:19
 * @LastEditors: PengChaoQun 1152684231@qq.com
 * @LastEditTime: 2024-05-02 13:07:53
 * @FilePath: /my-vue-app/mock/mock-server.ts
 * @Description: mock服务器
 */

import { createProdMockServer } from 'vite-plugin-mock/client';

// Import your mock .ts files one by one
// If you use vite.mock.config.ts, just import the file directly
// You can use the import.meta.glob function to import all
import DemoModule from './demo';

export function setupMockServer() {
  createProdMockServer([...DemoModule]);
}
