<template>
  <div class="flex flex-col">
    <AppToolBar />
    <div class="w-[680px] bg-white mt-5 rounded-2xl py-5 px-4 h-fit">
      <div class="flex flex-row justify-between items-center">
        <back-button :page="routeNames.breeds" />
        <BreedsFilter />
        <ImageLimit />
        <AscendingSorting />
        <DecsendingSorting />
      </div>

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
