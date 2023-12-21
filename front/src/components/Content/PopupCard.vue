<template>
  <div>
    {{ name }}
  </div>
</template>

<script setup>
  import useNaverBlog from '@/queries/useNaverBlog';
  const props = defineProps(['name']);

  const { data: blogData } = useNaverBlog('뉴진스');
</script>

<style scoped></style>
