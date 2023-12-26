<template>
  <Nav :goBack="goBack">{{ keyword }}</Nav>
  <div class="p-4" v-show="isSuccess">
    <Title v-if="searchPopupList?.length">
      {{ searchPopupList?.length }}개의 검색 결과가 있습니다.
    </Title>
    <Title v-else class="w-full text-center"> 😢 검색 결과가 없습니다. </Title>
    <div class="flex flex-col w-full gap-4 mt-2">
      <PopupCard
        v-for="store in searchPopupList"
        :key="store?.id"
        :store="store"
      />
    </div>
  </div>
</template>

<script setup>
  import { ref, watch } from 'vue';
  import { useRoute, useRouter } from 'vue-router';
  import { useSearchStore } from '@/stores/search';
  import usePopupSearch from '@/queries/usePopupSearch';
  import PopupCard from './PopupCard.vue';
  import Title from '@/components/Sidebar/Title.vue';
  import Nav from '@/components/Sidebar/Nav.vue';

  const route = useRoute();
  const router = useRouter();

  const keyword = ref(route?.query.keyword);
  const { resetKeyword } = useSearchStore();

  const {
    data: searchPopupList,
    refetch: refetchPopupList,
    isSuccess,
  } = usePopupSearch(keyword);

  watch(
    () => route.query.keyword,
    () => {
      if (!route.query.keyword) return;
      keyword.value = route.query.keyword;
      console.log(keyword.value);
      refetchPopupList.value();
    }
  );

  const goBack = () => {
    resetKeyword();
    router.replace('/');
  };
</script>

<style scoped></style>
