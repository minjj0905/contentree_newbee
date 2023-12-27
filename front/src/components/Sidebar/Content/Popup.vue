<template>
  <template v-if="storeSC && blogSC && imgSC">
    <Nav :goBack="goBack">{{ store?.name }}</Nav>
    <carousel
      v-show="imgData?.items.length"
      :items-to-show="1"
      :autoplay="3000"
      :wrapAround="true"
    >
      <slide v-for="image in imgData?.items" :key="image?.title">
        <img
          class="w-full h-[12rem] bg-gray-400 object-cover"
          :src="image?.link"
          @error="handleImgError"
        />
      </slide>

      <template #addons>
        <navigation class="text-white" />
      </template>
    </carousel>

    <div class="flex flex-col gap-1 mt-1 p-4">
      <h2
        class="font-bold max-w-[21.5rem] text-purple-600 text-xl flex justify-between gap-2 items-start"
      >
        <span class="w-full">
          {{ store?.name }}
        </span>
        <div class="flex m-0 mt-1">
          <fwb-badge class="flex-shrink-0">
            {{ store?.locale }}
          </fwb-badge>
          <fwb-badge class="flex-shrink-0" type="purple">{{
            store?.category
          }}</fwb-badge>
        </div>
      </h2>
      <span>{{ store?.address }}</span>
      <hr class="my-2" />
      <div class="flex gap-3">
        <span>
          <strong class="text-purple-500">기간</strong>
          {{ dayjs(store?.startDate).format('M.D') }} ~
          {{ dayjs(store?.endDate).format('M.D') }}
        </span>
        <span>
          <strong class="text-purple-500">시간</strong>
          {{ store?.openTime.substr(0, 5) }} ~
          {{ store?.closeTime.substr(0, 5) }}
        </span>
      </div>

      <p class="text-gray-500 text-sm">
        {{ store?.description }}
      </p>

      <h2 class="font-bold text-lg mt-6 text-gray-600">관련 글 보기</h2>
      <div class="flex flex-col gap-6 my-2">
        <fwb-card
          v-for="blog in blogData?.items"
          :key="blog.title"
          @click="handleBlogClick(blog?.link)"
          class="cursor-pointer"
        >
          <div class="flex flex-col p-3">
            <h2 class="text-purple-600 font-semibold">
              {{ decodeHTMLEntities(blog?.title) }}
            </h2>
            <p class="text-sm text-gray-500">
              {{ decodeHTMLEntities(blog?.description) }}
            </p>
          </div>
        </fwb-card>
      </div>
    </div>
  </template>
  <div v-else class="w-full h-full flex justify-center items-center">
    <fwb-spinner size="12" color="purple" />
  </div>
</template>

<script setup>
  import dayjs from 'dayjs';
  import { onMounted, watch } from 'vue';
  import { useRoute, useRouter } from 'vue-router';
  import { FwbBadge, FwbCard, FwbSpinner } from 'flowbite-vue';
  import { Carousel, Slide, Navigation } from 'vue3-carousel';
  import useNaverImg from '@/queries/useNaverImg';
  import useNaverBlog from '@/queries/useNaverBlog';
  import { useMapStore } from '@/stores/map';
  import usePopup from '@/queries/usePopup';
  import Nav from '@/components/Sidebar/Nav.vue';

  const route = useRoute();
  const router = useRouter();
  const { morph } = useMapStore();

  const { data: store, isSuccess: storeSC } = usePopup(route?.params.name);
  const { data: blogData, isSuccess: blogSC } = useNaverBlog(
    route?.params.name
  );
  const { data: imgData, isSuccess: imgSC } = useNaverImg(route?.params.name);

  onMounted(() => {
    try {
      morph(
        new window.naver.maps.LatLng(
          store.lat || history?.state?.lat,
          store.lng || history?.state?.lng
        )
      );
    } catch (e) {
      console.log(e);
    }
  });

  watch(
    () => [store],
    () => {
      try {
        morph(
          new window.naver.maps.LatLng(
            store.lat || history?.state?.lat,
            store.lng || history?.state?.lng
          )
        );
      } catch (e) {
        console.log(e);
      }
    }
  );

  const handleBlogClick = (link) => {
    window.open(link, '_blank');
  };

  const decodeHTMLEntities = (str) => {
    if (str !== undefined && str !== null && str !== '') {
      str = String(str);

      str = str.replace(/<script[^>]*>([\S\s]*?)<\/script>/gim, '');
      str = str.replace(/<\/?\w(?:[^"'>]|"[^"]*"|'[^']*')*>/gim, '');
      var element = document.createElement('div');
      element.innerHTML = str;
      str = element.textContent;
      element.textContent = '';
    }

    return str;
  };

  const goBack = () => {
    router.go(-1);
  };

  const handleImgError = (e) => {
    e.target.src = '/contentree_newbee/noimg.png';
  };
</script>

<style scoped></style>
