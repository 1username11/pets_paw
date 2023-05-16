<template>
  <div>
    <AppToolBar />
    <div v-loading="loading" class="bg-white max-w-[680px] py-5 px-4 mt-2.5 rounded-2xl h-[900px] overflow-auto">
      <BackButton :page="$routeNames.search" class="mr-2.5" />
      <NoItemsFound v-if="!liked"/>
      <Grid v-else :breed="breedsForSearch" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { router } from '@/router'

const generalStore = useGeneralStore()
const { breedsForSearch } = storeToRefs(generalStore)

const loading = ref(false)
const liked = ref<IVote[]>([])
console.log(router.currentRoute.value.params.breed);
console.log(breedsForSearch.value);

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
