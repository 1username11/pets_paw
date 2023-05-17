<template>
  <div class="flex flex-col">
    <AppToolBar />

    <div class="w-[680px] max-h-[900px] overflow-auto bg-white mt-2.5 rounded-2xl py-5 px-4">
      <div class="flex ">
        <BackButton :title="$routeNames.breeds" class="mr-2.5" />

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
const generalStore = useGeneralStore()
const { selectedBreeds } = storeToRefs(generalStore)
const { resetFilters } = generalStore

onUnmounted(resetFilters)
</script>
