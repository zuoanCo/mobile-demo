import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import AutoImport from "unplugin-auto-import/vite"
import Components from "unplugin-vue-components/vite"

import { VantResolver } from "@vant/auto-import-resolver"

import postCssPxToRem from "postcss-pxtorem"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [VantResolver()],
    }),
    Components({
      resolvers: [VantResolver()],
    }),
  ],
  css: {
    postcss: {
      plugins: [
        postCssPxToRem({
          // 自适应，px>rem转换
          rootValue: 37.5, // 75表示750设计稿，37.5表示375设计稿
          propList: ['*'], //需要转换的属性，这里选择全部都进行转换
        })
      ]
    }
  }
})
