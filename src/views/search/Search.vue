<template>
  <div>
    <AppToolBar />
    <div class="bg-white max-w-[680px] h-[900px] overflow-auto py-5 px-4 mt-2.5 rounded-2xl">
      <BackButton :title="$routeNames.search" class="mr-2.5" />

      <Grid
        v-if="breedsForSearch.length"
        :list="breedsForSearch"
      />

      <NoItemsFound v-else />
    </div>
  </div>
</template>

<script lang="ts" setup>
const generalStore = useGeneralStore()
const { breedsForSearch } = storeToRefs(generalStore)
</script>
