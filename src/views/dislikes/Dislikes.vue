<template>
  <div>
    <AppToolBar />
    <div v-loading="loading" class="bg-white max-w-[680px] h-[900px] overflow-auto py-5 px-4 mt-2.5 rounded-2xl">
      <BackButton :title="$routeNames.dislikes" class="mr-2.5" />

      <Grid
        v-if="disliked.length"
        :list="disliked"
      />

      <NoItemsFound v-else />
    </div>
  </div>
</template>

<script lang="ts" setup>
const generalStore = useGeneralStore()
const { getVoted } = generalStore

const loading = ref(false)
const disliked = ref<IVote[]>([])

async function getDisliked () {
  try {
    loading.value = true
    disliked.value = await getVoted(-1)
  } catch (e) {
    console.log(e)
  } finally {
    loading.value = false
  }
}

onMounted(getDisliked)
</script>
