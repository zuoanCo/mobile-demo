//demo.ts文件
import {defineStore } from "pinia";
import { ref } from "vue";

const  useDemoStore = defineStore('demo',
  () => {
    const someState = ref('你好 pinia')

    function changeState() {
      someState.value = '你好 pinia 2'
    }

    const  getSomeState = () => {
        return someState.value
    }

    // 如果要使用 getter 和 action ，需要使用 defineStore 的第二个参数
    // 第一个参数是 store 的 id，第二个参数是一个对象，对象中可以定义 getter 和 action
    
    // 返回值是一个对象，对象中的属性会暴露给外部
    // 相当于在 store 中定义了 someState 和 changeState 两个属性
    return { someState, changeState, getSomeState }
  },
  { 
    persist: {
        storage: localStorage,
        paths: ['someState']
    },
  },)
export default useDemoStore;
