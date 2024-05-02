/*
 * @Author: PengChaoQun 1152684231@qq.com
 * @Date: 2024-05-02 12:52:07
 * @LastEditors: PengChaoQun 1152684231@qq.com
 * @LastEditTime: 2024-05-02 12:54:58
 * @FilePath: /my-vue-app/src/router/index.ts
 * @Description:
 */
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: {}
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   component: () => import('')
    // }
  ]
});

export default router;