<script setup>
  import { RouterView } from 'vue-router';
  import { NaverMap } from 'vue3-naver-maps';

  const mapOptions = {
    latitude: 37.51347, // 지도 중앙 위도
    longitude: 127.041722, // 지도 중앙 경도
    zoom: 17,
    minZoom: 16,
    tileTransition: true,
  };

  const initLayers = [
    'BACKGROUND',
    'BACKGROUND_DETAIL',
    'POI_KOREAN',
    'TRANSIT',
    'ENGLISH',
  ];
</script>

<template>
  <router-view />
  <!-- <naver-map
    style="width: 100%; height: 100vh; position: absolute; top: 0%; left: 0%"
    :mapOptions="mapOptions"
    :initLayers="initLayers"
  >
  </naver-map> -->
</template>
