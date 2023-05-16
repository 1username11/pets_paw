<template>
  <div>
    <AppToolBar />
    <div v-loading="loading" class="bg-white max-w-[680px] py-5 px-4 mt-2.5 rounded-2xl h-[900px] overflow-auto">
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
  loading.value = true
  disliked.value = await getVoted(-1)
  loading.value = false
}
  
onMounted(getDisliked)
</script>
