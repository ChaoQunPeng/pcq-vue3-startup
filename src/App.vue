<!--
 * @Author: PengChaoQun 1152684231@qq.com
 * @Date: 2024-05-02 11:12:51
 * @LastEditors: PengChaoQun 1152684231@qq.com
 * @LastEditTime: 2024-05-02 13:38:59
 * @FilePath: /pcq-vue3-startup/src/App.vue
 * @Description: 
-->
<template>
  <div>
    <!-- <HelloWorld msg="Vite + Vue" /> -->
    <h1>已启动</h1>
  </div>
</template>

<script setup lang="ts">
import { DemoApi } from './api/demo';
import { onMounted } from 'vue';

onMounted(() => {
  console.log('meta ', import.meta.env);

  if (_EnableGlobalMock) {
    console.warn(`注意！你已经开启了全局mock！`);
  }
});

onMounted(() => {
  // 必须延时，不然mock不生效
  setTimeout(() => {
    getDemo();
    getList();
  }, 500);
});

const getDemo = async () => {
  const result = await DemoApi.getDemo(1).catch(err => {
    console.log(err);
  });

  if (result && result.code === 1) {
    console.log('sussess', result);
  } else {
    console.log('error', result);
  }
};

const getList = async () => {
  const result = await DemoApi.getDemoList().catch(err => {
    console.log(err);
  });

  if (result && result.code === 1) {
    console.log('sussess', result);
  } else {
    console.log('error', result);
  }
};
</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
