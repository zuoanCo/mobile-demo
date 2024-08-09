<script setup lang="ts">
import { ref, getCurrentInstance, computed, onMounted } from 'vue';
import mapExec from "../core"

// const a = getCurrentInstance()
// console.log(...a.ctx, 'PPPPP')
defineProps<{ msg: string }>()
let mapContainer = ref<HTMLElement>()
const show = ref(false);
const loading = ref(true);

    onMounted(async () => {
      loading.value = false;
      await mapExec(false);
      initMap();
    });

const initMap = function() {
  const that = this;

  const centerPoint = new window.qq.maps.LatLng(39.915, 116, 404)

  const map = new window.qq.maps.Map(mapContainer.value, { 
    center: centerPoint,
    zoom: 11,

  })

  //控件

  const scaleControl = new window.qq.maps.ScaleControl({ map })

  // II点标记

  const marker = new window.qq.maps.Marker({
    position: centerPoint,map,
    draggable: true,
    animation:
    window.qq.maps.MarkerAnimation.BOUNCE
  })

  //绑定点击地图事件

  window.qq.maps.event.addListener(map, "click", function (e: any) {
    console.log(e, 'PPPPPPP')
    // that.getAddrByPoint(e)

  })

  var geolocation = new window.qq.maps.Geolocation("YQGBZ-2TN3B-7KZUD-NB6OP-WFZ56-IRF7D", {});
  geolocation.getLocation((success:any) => {
    console.log(success)
  }, () => {});
  
}
const currentRate = ref(0);
    const text = computed(() => currentRate.value.toFixed(0) + '%');
const showPop = () => {
  show.value = true;
}
const count = ref(0)
</script>

<template>
  <h1>{{ msg }}</h1>
  <div class="map" ref="mapContainer"></div>
  <!-- <van-circle
  v-model:current-rate="currentRate"
  :rate="30"
  :speed="100"
  :text="text"
/>
<van-skeleton title avatar :row="3" :loading="loading">
  <div>实际内容</div>
</van-skeleton>
  <van-cell title="展示弹出层" is-link @click="showPop"></van-cell>
  <van-popup :show="show" :style="{
    padding: '64px'
  }">内容</van-popup>
  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div> -->

</template>

<style scoped>
.read-the-docs {
  color: #888;
}

.map {
  width: 200px;
  height: 200px;
}
</style>
