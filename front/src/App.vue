<script setup>
  import { onBeforeMount } from 'vue';
  import { RouterView } from 'vue-router';
  import { NaverMap } from 'vue3-naver-maps';
  import { useMapStore } from './stores/map';
  import { useMarkerStore } from './stores/marker';

  const { setMap } = useMapStore();
  const { initMarkers } = useMarkerStore();

  const mapOptions = {
    latitude: 37.51347, // 지도 중앙 위도
    longitude: 127.041722, // 지도 중앙 경도
    zoom: 15,
    minZoom: 13,
    tileTransition: true,
  };

  onBeforeMount(() => {
    navigator.geolocation.getCurrentPosition((pos) => {
      if (pos.coords.latitude) mapOptions.latitude = pos.coords.latitude;
      if (pos.coords.longitude) mapOptions.longitude = pos.coords.longitude;
    });
  });

  const initLayers = [
    'BACKGROUND',
    'BACKGROUND_DETAIL',
    'POI_KOREAN',
    'TRANSIT',
    'ENGLISH',
  ];

  const onLoadMap = (mapObject) => {
    setMap(mapObject);
    initMarkers();
  };
</script>

<template>
  <router-view />
  <naver-map
    style="
      width: 100%;
      height: 100vh;
      position: absolute;
      top: 0%;
      left: 0%;
      z-index: -1;
    "
    :mapOptions="mapOptions"
    :initLayers="initLayers"
    @onLoad="onLoadMap"
  >
  </naver-map>
</template>
