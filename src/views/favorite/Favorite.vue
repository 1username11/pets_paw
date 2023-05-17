<template>
  <div>
    <AppToolBar />
    <div v-loading="loading" class="bg-white max-w-[680px] h-[900px] overflow-auto py-5 px-4 mt-2.5 rounded-2xl">
      <BackButton :title="$routeNames.favorite" class="mr-2.5" />

      <Grid
        v-if="favorites.length"
        :list="favorites"
        @removeFromFavorites="getFavorites"
      />

      <NoItemsFound v-else />
    </div>
  </div>
</template>

<script lang="ts" setup>

const loading = ref(false)
const favorites = ref<IVote[]>([])

async function getFavorites () {
  try {
    loading.value = true
    favorites.value = await generalService.getFavorites()
  } catch (error) {
    console.log(error)
  } finally {
    loading.value = false
  }
}

onMounted(getFavorites)
</script>
