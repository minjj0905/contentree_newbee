<script setup>
  import { useRoute } from 'vue-router';

  import SearchBar from './SearchBar.vue';
  import Footer from './Footer.vue';

  const route = useRoute();
</script>

<template>
  <div
    v-show="route.path !== '/'"
    class="absolute w-[26rem] h-[90vh] top-10 left-4 pt-3 bg-white !rounded-md flex flex-col justify-betwee"
  >
    <SearchBar />
    <main class="w-full grow overflow-y-auto p-4">
      <router-view :key="route.path" />
    </main>
    <Footer />
  </div>
  <div
    v-show="route.path === '/'"
    class="absolute w-[32rem] top-10 left-1/2 bg-white flex flex-col justify-center rounded-md border-2 -translate-x-1/2 border-slate-200"
  >
    <SearchBar class="m-0 !py-2 !border-0" />
  </div>
</template>

<style scoped></style>
