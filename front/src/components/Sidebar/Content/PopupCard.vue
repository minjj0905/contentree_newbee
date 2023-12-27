<template>
  <fwb-card v-show="isSuccess" @click="handleClick" class="cursor-pointer p-3">
    <div class="flex justify-between gap-2 text-sm">
      <div class="flex w-[15rem] h-[7rem] flex-col">
        <h2
          class="font-bold text-purple-600 text-base flex justify-between gap-2 items-start"
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
        <p class="text-gray-500 text-ellipsis line-clamp-2">
          {{ store?.description }}
        </p>
      </div>
      <img
        class="w-[6.5rem] min-h-[5.5rem] max-h-[6.5rem] object-cover rounded-md bg-gray-100"
        :src="imgData?.items[0]?.thumbnail"
        @error="handleImgError"
      />
    </div>
  </fwb-card>
</template>

<script setup>
  import dayjs from 'dayjs';
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  import { FwbCard, FwbBadge } from 'flowbite-vue';

  import useNaverImg from '@/queries/useNaverImg';

  const props = defineProps(['store']);
  const router = useRouter();

  const name = ref(props?.store?.name);
  const { data: imgData, isSuccess } = useNaverImg(name.value);

  const handleClick = () => {
    router.push({
      name: 'popup',
      params: {
        name: props.store.name,
      },
      state: {
        needMorph: true,
        lat: props.store.lat,
        lng: props.store.lng,
      },
    });
  };

  const handleImgError = (e) => {
    e.target.src = '/contentree_newbee/noimg.png';
  };
</script>

<style scoped></style>
