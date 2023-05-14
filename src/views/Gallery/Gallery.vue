<template>
  <div class="flex flex-col">
    <AppToolBar />
    <div class="bg-white max-w-[680px] p-5 mt-2.5 rounded-2xl">
      <BackButton :page="routeNames.gallery" />
      <GaleryToolbar />
      <Grid :list="images" />
    </div>
  </div>
</template>
<script setup lang="ts">
import { routeNames } from '@/router/route-names'
import Grid from '@/components/Grid.vue'
// const images = ref()
// onMounted(async () => {
//   const res = await generalService.getImages(10, 0)
//   images.value = res
// })
const images = [
  'src/assets/image 1.png',
  'src/assets/image 1.png',
  'src/assets/image 1.png',
  'src/assets/image 1.png',
  'src/assets/image 1.png',
  'src/assets/image 1.png',
  'src/assets/image 1.png',
  'src/assets/image 1.png',
]
</script>
