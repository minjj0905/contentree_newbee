<template>
  <fwb-button @click="handleClick">popuplist test</fwb-button>
</template>

<script setup>
  import { FwbButton } from 'flowbite-vue';

  import usePopupList from '@/queries/usePopupList';

  const { data: popupList } = usePopupList();

  const handleClick = () => {
    console.log(popupList.value[0]);
  };
</script>

<style scoped></style>
