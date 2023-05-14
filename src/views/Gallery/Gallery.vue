<template>
  <div class="flex flex-col">
    <AppToolBar />
    <div class="bg-white max-w-[680px] p-5 mt-2.5 rounded-2xl">
      <div class="flex flex-row">
        <back-button :page="$routeNames.gallery" class="mr-2.5"/>

        <Filters />
      </div>
      <Grid :list="breeds" />
    </div>
  </div>
</template>
<script setup lang="ts">
import Grid from '@/components/Grid.vue'
import type { IBreed } from '@/types/general'
const breeds = ref<IBreed[]>([])
onMounted(async () => {
  const res = await generalService.getBreeds(10, 0)
  breeds.value = res
})

// const images = [
//   'src/assets/image 1.png',
//   'src/assets/image 1.png',
//   'src/assets/image 1.png',
//   'src/assets/image 1.png',
//   'src/assets/image 1.png',
//   'src/assets/image 1.png',
//   'src/assets/image 1.png',
//   'src/assets/image 1.png'
// ]
</script>
