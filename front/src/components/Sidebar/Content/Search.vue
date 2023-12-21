<template>
  <Title> {{ searchPopupList?.length }}개의 검색 결과가 있습니다. </Title>
  <div class="flex flex-col w-full gap-4 mt-2">
    <PopupCard
      v-for="store in searchPopupList"
      :key="store?.id"
      :store="store"
    />
  </div>
</template>

<script setup>
  import { useRoute } from 'vue-router';
  import usePopupSearch from '@/queries/usePopupSearch';

  import PopupCard from './PopupCard.vue';
  import Title from '@/components/Sidebar/Title.vue';

  const route = useRoute();

  const { data: searchPopupList } = usePopupSearch(route.query.keyword);
</script>

<style scoped></style>
