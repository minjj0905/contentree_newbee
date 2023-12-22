<template>
  <fwb-card class="cursor-pointer p-3">
    <div class="flex justify-between gap-2 text-sm">
      <div class="flex w-[16rem] min-h-[6rem] flex-col">
        <h2
          class="font-bold text-purple-600 text-lg flex justify-between gap-2 items-start"
        >
          {{ store?.name }}
          <fwb-badge class="m-0 mt-1 flex-shrink-0" type="purple">{{
            store?.category
          }}</fwb-badge>
        </h2>
        <div>
          <span class="font-semibold mr-1">
            {{ store?.locale }}
          </span>
          <span>
            {{ dayjs(store?.startDate).format('M.D') }} ~
            {{ dayjs(store?.endDate).format('M.D') }}
          </span>
        </div>
        <p class="text-gray-500">
          {{ store?.description }}
        </p>
      </div>
      <img
        class="w-[6.5rem] min-h-[5.5rem] max-h-[6.5rem] object-cover rounded-md bg-gray-100"
        :src="imgData?.items[0].link"
        onerror="this.src = 'noimg.png'"
      />
    </div>
  </fwb-card>
</template>

<script setup>
  import dayjs from 'dayjs';
  import { FwbCard, FwbBadge } from 'flowbite-vue';

  // import useNaverBlog from '@/queries/useNaverBlog';
  import useNaverImg from '@/queries/useNaverImg';

  const props = defineProps(['store']);

  // const { data: blogData } = useNaverBlog(props?.store?.name);
  const { data: imgData } = useNaverImg(props?.store?.name);
</script>

<style scoped></style>
