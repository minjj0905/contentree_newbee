<script setup>
  import { useRoute } from 'vue-router';

  import SearchBar from './SearchBar.vue';
  import Footer from './Footer.vue';

  const route = useRoute();
</script>

<template>
  <div
    v-show="route.path !== '/'"
    class="absolute w-[26rem] h-[60vh] top-8 left-4 pt-3 bg-white !rounded-md flex flex-col justify-betwee"
  >
    <SearchBar />
    <main class="w-full grow overflow-y-auto p-4">
      <router-view :key="$route.fullPath"></router-view>
    </main>
    <Footer />
  </div>
  <div
    v-show="route.path === '/'"
    class="absolute w-[23rem] top-8 left-4 bg-white flex flex-col justify-center rounded-md border border-slate-200"
  >
    <SearchBar class="m-0 !py-2 !border-0" />
  </div>
</template>

<style scoped></style>
