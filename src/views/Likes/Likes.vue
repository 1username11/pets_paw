<template>
  <div>
    <AppToolBar />
    <div v-loading="loading" class="bg-white max-w-[680px] py-5 px-4 mt-2.5 rounded-2xl h-[900px] overflow-auto">
      <BackButton :title="$routeNames.likes" class="mr-2.5" />

      <div v-loading="loading">
        <Grid
          v-if="liked.length"
          :list="liked"
        />

        <NoItemsFound v-else />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const generalStore = useGeneralStore()
const { getVoted } = generalStore

const loading = ref(false)
const liked = ref<IVote[]>([])

onMounted(async () => {
  try {
    loading.value = true
    liked.value = await getVoted(1)
  } catch (error) {
    console.log(error)
  } finally {
    loading.value = false
  }
})
</script>
