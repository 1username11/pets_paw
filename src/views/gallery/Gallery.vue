<template>
  <div class="flex flex-col">
    <AppToolBar />

    <div class="bg-white max-w-[680px] max-h-[900px] overflow-auto py-5 px-4 mt-2.5 rounded-2xl">
      <div class="flex">
        <BackButton :title="$routeNames.gallery" class="mr-2.5" />

        <Filters />
      </div>

      <Grid
        v-if="selectedBreeds.length"
        :list="selectedBreeds"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import Grid from '@/components/Grid.vue'

const generalStore = useGeneralStore()
const { selectedBreeds } = storeToRefs(generalStore)
const { resetFilters } = generalStore

onUnmounted(resetFilters)
</script>
