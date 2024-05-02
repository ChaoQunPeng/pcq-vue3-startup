/*
 * @Author: PengChaoQun 1152684231@qq.com
 * @Date: 2024-05-01 18:50:58
 * @LastEditors: PengChaoQun 1152684231@qq.com
 * @LastEditTime: 2024-05-01 18:57:11
 * @FilePath: /pcq-vue3-startup/tailwind.config.js
 * @Description:
 */

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,vue,js}'],
  theme: {
    spacing: Array.from({ length: 1000 }).reduce((map, _, index) => {
      map[index] = `${index}px`
      return map
    }, {}),
    colors: {
      red: 'rgba(227, 23, 0, 1)',
      blue: 'rgba(24 ,144 ,255,1)',
      purple: 'rgba(133, 37, 250,1)',
      green: '#12be30',
      white: '#ffffff',
      black: 'rgba(31,51,73,1)',
      'black-85': 'rgba(31,51,73,0.85)',
      'black-65': 'rgba(31,51,73,0.65)',
      'black-50': 'rgba(31,51,73,0.50)',
      'black-45': 'rgba(31,51,73,0.45)',
      'black-25': 'rgba(31,51,73,0.25)',
      'black-5': 'rgba(31,51,73,0.05)'
    },
    extend: {
      fontSize: [12, 14, 16, 18, 20, 24, 26, 28, 30, 32, 34, 36, 38, 40].reduce((acc, cur) => {
        acc[`size-${cur}`] = `${cur}px`
        return acc
      }, {})
      // borderRadius: Array.from({ length: 20 }, (e, i) => i + 1).reduce((acc, cur) => {
      //   acc[`radius-${cur}`] = `${cur}px`
      //   return acc
      // }, {})
    }
  },
  plugins: []
}
