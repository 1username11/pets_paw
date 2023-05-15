<template>
  <div class="flex flex-col">
    <AppToolBar />

    <div class="w-[680px] bg-white mt-2.5 rounded-2xl py-5 px-4 h-fit">
      <div class="flex ">
        <BackButton :page="$routeNames.breeds" class="mr-2.5" />

        <Filters />
      </div>

      <Grid :list="selectedBreeds" />
    </div>
  </div>
</template>

<script setup lang="ts">

const generalStore = useGeneralStore()
const { selectedBreeds } = storeToRefs(generalStore)
</script>
