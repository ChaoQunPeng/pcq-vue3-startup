/*
 * @Author: PengChaoQun 1152684231@qq.com
 * @Date: 2024-02-04 15:07:59
 * @LastEditors: PengChaoQun 1152684231@qq.com
 * @LastEditTime: 2024-05-02 12:39:46
 * @FilePath: /my-vue-app/src/api/demo.ts
 * @Description:
 */
import { BaseApi } from './config/base-api';
import { axiosInstance } from './config/http';
import { type ResponseModel } from './config/model';

class Demo extends BaseApi {
  constructor() {
    super('demo');
  }

  /**
   * @description: 获取详情
   * @return {*}
   */
  getDemo(id: number | string): Promise<ResponseModel> {
    return axiosInstance.get(`${this.name}/${id}`);
  }

  /**
   * @description: 获取列表
   * @return {*}
   */
  getDemoList(): Promise<ResponseModel> {
    return axiosInstance.get(`${this.name}/list`);
  }
}

export const DemoApi = new Demo();
