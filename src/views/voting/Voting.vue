<template>
  <div class="flex flex-col space-y-2.5">
    <AppToolBar />

    <div v-loading="loading" class="min-h-[780px] bg-white rounded-2xl p-5">
      <BackButton :title="routeNames.voting" />

      <div>
        <el-image
          fit="cover"
          :src="randomImage?.url"
          alt="No image"
          class="w-[640px] h-[360px] mt-5 rounded-[20px] z-0"
        />
        <div
          class="flex justify-center items-center mx-auto bg-white w-[258px] h-[88px] rounded-2xl mt-[-40px]
          relative space-x-1 z-50"
        >
          <button
            class="bg-[#97EAB9] w-[80px] h-[80px] rounded-l-2xl  hover:bg-[#97EAB9] hover:opacity-30 like-button"
            @click="addToLikes"
          >
            <VotingLikeIcon />
          </button>

          <button
            class="bg-[#FF868E] w-[80px] h-[80px]  hover:bg-[#FF868E] hover:opacity-30 favorite-button"
            @click="addToFavorites"
          >
            <VotingAddToFavorite v-if="!addedToFavorite" />
            <VotingAddedToFavorite v-else />
          </button>

          <button
            class="bg-[#FFD280] w-[80px] h-[80px] rounded-r-2xl hover:bg-[#FFD280] hover:opacity-30 dislike-button"
            @click="addToDislikes"
          >
            <VotingDIslikeIcon />
          </button>
        </div>
      </div>

      <div class="mt-5 space-y-3">
        <UserLog
          v-for="(log, idx) in logs"
          :key="log.imageId + idx"
          :log="log"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import VotingDIslikeIcon from '@/components/svg-icons/VotingDIslikeIcon.vue'
import { routeNames } from '@/router/route-names'

const randomImage = ref<IImage>({})
const loading = ref(true)
const logs = ref([] as ILog[])
const addedToFavorite = ref(false)

function logUserAction (action: 'Likes' | 'Dislikes' | 'Favorites') {
  const log: ILog = {
    imageId: randomImage.value.id || '',
    action
  }
  if (logs.value.length > 3) {
    logs.value.push(log)
    logs.value.shift()
  } else {
    logs.value.push(log)
  }
}

async function addToLikes () {
  await vote(1)
  logUserAction('Likes')
  await getImage()
}

async function addToFavorites () {
  try {
    if (randomImage.value.id) {
      addedToFavorite.value = true
      await generalService.addToFavorites(randomImage.value.id)
      logUserAction('Favorites')
    }
  } catch (e) {
    console.log(e)
  }
}

async function addToDislikes () {
  await vote(-1)
  logUserAction('Dislikes')
  await getImage()
}

async function vote (value: 1 | -1) {
  try {
    const payload = {
      image_id: randomImage.value.id,
      value
    }
    await generalService.vote(payload)
  } catch (e) {
    console.log(e)
  }
}

async function getImage () {
  try {
    addedToFavorite.value = false
    loading.value = true
    randomImage.value = (await generalService.getImage())[0]
  } catch (e) {
    console.log(e)
  } finally {
    loading.value = false
  }
}

onMounted(getImage)
</script>

<style scoped lang="scss">
.like-button:hover{
  :first-child{
    fill: darkcyan;
  }
}
.favorite-button:hover{
  :first-child{
    fill: indianred;
  }
}
.dislike-button:hover{
  :first-child{
    fill: darkorange;
  }
}
</style>
