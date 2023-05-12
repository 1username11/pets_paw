<template>
  <div class="flex flex-col">
    <AppToolBar />
    <div class="bg-white max-w-[680px] p-5 mt-2.5 rounded-2xl">
      <BackButton :page="routeNames.gallery" />
      <GaleryToolbar />
      <Grid :images="images" />
    </div>
  </div>
</template>
<script setup lang="ts">
import { routeNames } from '@/router/route-names'

const images = [
  'src/assets/image 1.png',
  'src/assets/image 1.png',
  'src/assets/image 1.png',
  'src/assets/image 1.png',
  'src/assets/image 1.png',
  'src/assets/image 1.png',
  'src/assets/image 1.png',
  'src/assets/image 1.png',
  'src/assets/image 1.png',
  'src/assets/image 1.png'
  // 'src/assets/image 1.png',
  // 'src/assets/image 1.png',
]
</script>
