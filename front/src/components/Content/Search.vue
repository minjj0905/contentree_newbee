<template>
  <PopupCard name="1111" />
  {{ searchPopupList }}
</template>

<script setup>
  import { useRoute } from 'vue-router';
  import usePopupSearch from '@/queries/usePopupSearch';

  import PopupCard from './PopupCard.vue';

  const route = useRoute();

  const { data: searchPopupList } = usePopupSearch(route.query.keyword);
</script>

<style scoped></style>
