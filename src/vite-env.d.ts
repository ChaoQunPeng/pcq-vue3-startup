/// <reference types="vite/client" />

declare module '*.vue' {
  import { ComponentOptions } from 'vue';
  const componentOptions: ComponentOptions;
  export default componentOptions;
}

/**
 * 全局启用mock
 */
declare const _EnableGlobalMock: string;

/**
 * 允许mock调试
 */
declare const _EnableMockDebug: string;
