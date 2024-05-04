/*
 * @Author: PengChaoQun 1152684231@qq.com
 * @Date: 2024-01-30 19:14:17
 * @LastEditors: PengChaoQun 1152684231@qq.com
 * @LastEditTime: 2024-05-04 21:00:04
 * @FilePath: /pcq-vue3-startup/src/mock/demo.ts
 * @Description:
 */
import Mock from 'mockjs';

import { type MockMethod } from 'vite-plugin-mock';

import { SuccessModel } from '../api/config/model';

// function regUrl(url: string) {
//   return RegExp(url + '.*');
// }

export default [
  {
    url: '/mock/demo/list',
    method: 'get',
    response: () => {
      return new SuccessModel({
        code: 1,
        msg: 'success',
        data: [
          {
            id: 1,
            name: 'demo'
          }
        ]
      });
    }
  },
  {
    url: '/mock/demo',
    // 这个url是要生成的数据接口地址，封装的axios请求，加上/mock即可
    method: 'get',
    response: () => {
      const data = Mock.mock({ id: 1 });

      return new SuccessModel({
        code: 1,
        msg: 'success',
        data: data
      });
    }
  }
] as MockMethod[];
