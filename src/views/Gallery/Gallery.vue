<template>
  <div class="flex flex-col">
    <AppToolBar />
    <div class="bg-white max-w-[680px] p-5 mt-2.5 rounded-2xl">
      <div class="flex flex-row">
        <BackButton :page="$routeNames.gallery" class="mr-2.5" />

        <Filters />
      </div>
      <Grid :list="selectedBreeds" />
    </div>
  </div>
</template>
<script setup lang="ts">
import Grid from '@/components/Grid.vue'

const generalStore = useGeneralStore()
const { selectedBreeds } = storeToRefs(generalStore)
</script>
