<template>
  <div>
    <AppToolBar />
    <div v-loading="loading" class="bg-white max-w-[680px] py-5 px-4 mt-2.5 rounded-2xl h-[900px] overflow-auto">
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

const loading = ref(false)

onMounted(async () => {
  try {
    loading.value = true
  } catch (error) {
    console.log(error)
  } finally {
    loading.value = false
  }
})
</script>
