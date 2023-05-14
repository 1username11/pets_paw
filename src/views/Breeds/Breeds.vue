<template>
  <div class="flex flex-col">
    <AppToolBar />
    <div class="w-[680px] bg-white mt-5 rounded-2xl py-5 px-4 h-fit">
      <div class="flex flex-row">
        <back-button :page="$routeNames.breeds" class="mr-2.5"/>

        <Filters />
      </div>

      <Grid :list="list" />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { IBreed } from '@/types/general'

const list = ref<IBreed[]>([])
onMounted(async () => {
  list.value = await generalService.getBreeds(10, 0)
})
</script>
