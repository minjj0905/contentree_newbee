<script setup>
  import { FwbButton } from 'flowbite-vue';
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
  <fwb-button color="default">Default</fwb-button>
  <fwb-button color="alternative">Alternative</fwb-button>
  <fwb-button color="dark">Dark</fwb-button>
  <fwb-button color="light">Light</fwb-button>
  <fwb-button color="green">Green</fwb-button>
  <fwb-button color="red">Red</fwb-button>
  <fwb-button color="yellow">Yellow</fwb-button>
  <fwb-button color="purple">Purple</fwb-button>
  <fwb-button color="pink">Pink</fwb-button>

  test success
  <naver-map
    style="width: 100%; height: 100vh; position: absolute; top: 0%; left: 0%"
    :mapOptions="mapOptions"
    :initLayers="initLayers"
  >
  </naver-map>
</template>
