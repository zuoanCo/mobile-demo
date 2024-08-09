// vite.config.ts
import { defineConfig } from "file:///D:/%E5%9F%8E%E5%95%86%E8%A1%8C%E8%81%94%E7%9B%9F/%E5%89%8D%E7%AB%AF/h5-demo/node_modules/vite/dist/node/index.js";
import vue from "file:///D:/%E5%9F%8E%E5%95%86%E8%A1%8C%E8%81%94%E7%9B%9F/%E5%89%8D%E7%AB%AF/h5-demo/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import AutoImport from "file:///D:/%E5%9F%8E%E5%95%86%E8%A1%8C%E8%81%94%E7%9B%9F/%E5%89%8D%E7%AB%AF/h5-demo/node_modules/unplugin-auto-import/dist/vite.js";
import Components from "file:///D:/%E5%9F%8E%E5%95%86%E8%A1%8C%E8%81%94%E7%9B%9F/%E5%89%8D%E7%AB%AF/h5-demo/node_modules/unplugin-vue-components/dist/vite.js";
import { VantResolver } from "file:///D:/%E5%9F%8E%E5%95%86%E8%A1%8C%E8%81%94%E7%9B%9F/%E5%89%8D%E7%AB%AF/h5-demo/node_modules/@vant/auto-import-resolver/dist/index.esm.mjs";
import postCssPxToRem from "file:///D:/%E5%9F%8E%E5%95%86%E8%A1%8C%E8%81%94%E7%9B%9F/%E5%89%8D%E7%AB%AF/h5-demo/node_modules/postcss-pxtorem/index.js";
var vite_config_default = defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [VantResolver()]
    }),
    Components({
      resolvers: [VantResolver()]
    })
  ],
  css: {
    postcss: {
      plugins: [
        postCssPxToRem({
          // 自适应，px>rem转换
          rootValue: 37.5,
          // 75表示750设计稿，37.5表示375设计稿
          propList: ["*"]
          //需要转换的属性，这里选择全部都进行转换
        })
      ]
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxcdTU3Q0VcdTU1NDZcdTg4NENcdTgwNTRcdTc2REZcXFxcXHU1MjREXHU3QUVGXFxcXGg1LWRlbW9cIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXFx1NTdDRVx1NTU0Nlx1ODg0Q1x1ODA1NFx1NzZERlxcXFxcdTUyNERcdTdBRUZcXFxcaDUtZGVtb1xcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovJUU1JTlGJThFJUU1JTk1JTg2JUU4JUExJThDJUU4JTgxJTk0JUU3JTlCJTlGLyVFNSU4OSU4RCVFNyVBQiVBRi9oNS1kZW1vL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcbmltcG9ydCB2dWUgZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlJ1xuXG5pbXBvcnQgQXV0b0ltcG9ydCBmcm9tIFwidW5wbHVnaW4tYXV0by1pbXBvcnQvdml0ZVwiXG5pbXBvcnQgQ29tcG9uZW50cyBmcm9tIFwidW5wbHVnaW4tdnVlLWNvbXBvbmVudHMvdml0ZVwiXG5cbmltcG9ydCB7IFZhbnRSZXNvbHZlciB9IGZyb20gXCJAdmFudC9hdXRvLWltcG9ydC1yZXNvbHZlclwiXG5cbmltcG9ydCBwb3N0Q3NzUHhUb1JlbSBmcm9tIFwicG9zdGNzcy1weHRvcmVtXCJcblxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHBsdWdpbnM6IFtcbiAgICB2dWUoKSxcbiAgICBBdXRvSW1wb3J0KHtcbiAgICAgIHJlc29sdmVyczogW1ZhbnRSZXNvbHZlcigpXSxcbiAgICB9KSxcbiAgICBDb21wb25lbnRzKHtcbiAgICAgIHJlc29sdmVyczogW1ZhbnRSZXNvbHZlcigpXSxcbiAgICB9KSxcbiAgXSxcbiAgY3NzOiB7XG4gICAgcG9zdGNzczoge1xuICAgICAgcGx1Z2luczogW1xuICAgICAgICBwb3N0Q3NzUHhUb1JlbSh7XG4gICAgICAgICAgLy8gXHU4MUVBXHU5MDAyXHU1RTk0XHVGRjBDcHg+cmVtXHU4RjZDXHU2MzYyXG4gICAgICAgICAgcm9vdFZhbHVlOiAzNy41LCAvLyA3NVx1ODg2OFx1NzkzQTc1MFx1OEJCRVx1OEJBMVx1N0EzRlx1RkYwQzM3LjVcdTg4NjhcdTc5M0EzNzVcdThCQkVcdThCQTFcdTdBM0ZcbiAgICAgICAgICBwcm9wTGlzdDogWycqJ10sIC8vXHU5NzAwXHU4OTgxXHU4RjZDXHU2MzYyXHU3Njg0XHU1QzVFXHU2MDI3XHVGRjBDXHU4RkQ5XHU5MUNDXHU5MDA5XHU2MkU5XHU1MTY4XHU5MEU4XHU5MEZEXHU4RkRCXHU4ODRDXHU4RjZDXHU2MzYyXG4gICAgICAgIH0pXG4gICAgICBdXG4gICAgfVxuICB9XG59KVxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUEyUyxTQUFTLG9CQUFvQjtBQUN4VSxPQUFPLFNBQVM7QUFFaEIsT0FBTyxnQkFBZ0I7QUFDdkIsT0FBTyxnQkFBZ0I7QUFFdkIsU0FBUyxvQkFBb0I7QUFFN0IsT0FBTyxvQkFBb0I7QUFHM0IsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUztBQUFBLElBQ1AsSUFBSTtBQUFBLElBQ0osV0FBVztBQUFBLE1BQ1QsV0FBVyxDQUFDLGFBQWEsQ0FBQztBQUFBLElBQzVCLENBQUM7QUFBQSxJQUNELFdBQVc7QUFBQSxNQUNULFdBQVcsQ0FBQyxhQUFhLENBQUM7QUFBQSxJQUM1QixDQUFDO0FBQUEsRUFDSDtBQUFBLEVBQ0EsS0FBSztBQUFBLElBQ0gsU0FBUztBQUFBLE1BQ1AsU0FBUztBQUFBLFFBQ1AsZUFBZTtBQUFBO0FBQUEsVUFFYixXQUFXO0FBQUE7QUFBQSxVQUNYLFVBQVUsQ0FBQyxHQUFHO0FBQUE7QUFBQSxRQUNoQixDQUFDO0FBQUEsTUFDSDtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
