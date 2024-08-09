import { defineConfig } from 'vite'
import path from 'path'
import vue from '@vitejs/plugin-vue'

import AutoImport from "unplugin-auto-import/vite"
import Components from "unplugin-vue-components/vite"

import { VantResolver } from "@vant/auto-import-resolver"

import { viteMockServe } from 'vite-plugin-mock'

import postCssPxToRem from "postcss-pxtorem"

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    } 
  },
  build: {
    outDir: '/',
  },
  plugins: [
    vue(),
    AutoImport({
      resolvers: [VantResolver()],
    }),
    Components({
      resolvers: [VantResolver()],
    }),
    viteMockServe({
      mockPath: "mock",
      enable: true
    })
  ],
  envPrefix: "OPEN_",
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
