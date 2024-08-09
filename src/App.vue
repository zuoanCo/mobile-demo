<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'

const onClickButton = () => {
  console.log('onClickButton')
}

const onClickIcon = () => {
  console.log('onClickIcon')
}

</script>

<template>
  <HelloWorld msg="demo，这你受得了吗" />
  <van-action-bar>
    <van-action-bar-icon icon="chat-o" text="客服" @click="onClickIcon" />
    <van-action-bar-icon icon="cart-o" text="购物车" @click="onClickIcon" />
    <van-action-bar-icon icon="shop-o" text="店铺" @click="onClickIcon" />
    <van-action-bar-button type="danger" text="立即购买" @click="onClickButton" />
  </van-action-bar>
</template>

<style scoped>

</style>
