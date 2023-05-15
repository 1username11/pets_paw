<template>
  <div>
    <AppToolBar />
    <div class="bg-white max-w-[680px] py-5 px-4 mt-2.5 rounded-2xl max-h-[900px] overflow-auto">
      <BackButton :page="$routeNames.dislikes" class="mr-2.5" />
      <NoItemsFound v-if="!disliked"/>
      <Grid v-else :votes="disliked" />
    </div>
  </div>
</template>

<script lang="ts" setup>
const generalStore = useGeneralStore()
const { getVoted } = generalStore

const loading = ref(false)
const disliked = ref<IVote[]>([])

onMounted(async () => {
  try {
    loading.value = true
    disliked.value = await getVoted(-1)
  } catch (error) {
    console.log(error)
  } finally {
    loading.value = false
  }
})
</script>
