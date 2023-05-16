<template>
  <div>
    <AppToolBar />
    <div v-loading="loading" class="bg-white max-w-[680px] py-5 px-4 mt-2.5 rounded-2xl h-[900px] overflow-auto">
      <BackButton :page="$routeNames.favorite" class="mr-2.5" />
      <NoItemsFound v-if="!favorites"/>
      <Grid v-else :votes="favorites" @removeFromFavorites="removeFromFavorites"/>
    </div>
  </div>
</template>

<script lang="ts" setup>

const loading = ref(false)
const favorites = ref<IVote[]>([])

async function removeFromFavorites () {
  try {
    loading.value = true
    favorites.value = await generalService.getFavorites()
  } catch (error) {
    console.log(error)
  } finally {
    loading.value = false
  }
}

onMounted(async () => {
  try {
    loading.value = true
    favorites.value = await generalService.getFavorites()
  } catch (error) {
    console.log(error)
  } finally {
    loading.value = false
  }
})
</script>
