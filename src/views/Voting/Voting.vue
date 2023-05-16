<template>
  <div class="flex flex-col space-y-2.5">
    <AppToolBar />

    <div v-loading="loading" class="min-h-[780px] bg-white rounded-2xl p-5">
      <BackButton :page="routeNames.voting" />

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
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0 15C0 6.71573 6.71573 0 15 0C23.2843 0 30 6.71573 30 15C30 23.2843 23.2843 30 15 30C6.71573 30 0
                23.2843 0 15ZM15 2C7.8203 2 2 7.8203 2 15C2 22.1797 7.8203 28 15 28C22.1797 28 28 22.1797 28 15C28
                7.8203 22.1797 2 15 2ZM10 12H8V10H10V12ZM22 12H20V10H22V12ZM9.2 16.6L9.8 17.4C12.4 20.8667 17.6
                20.8667 20.2 17.4L20.8 16.6L22.4 17.8L21.8 18.6C18.4 23.1333 11.6 23.1333 8.2 18.6L7.6 17.8L9.2 16.6Z"
                fill="white"
              />
            </svg>
          </button>

          <button
            class="bg-[#FF868E] w-[80px] h-[80px]  hover:bg-[#FF868E] hover:opacity-30 favorite-button"
            @click="addToFavorites"
          >
            <svg v-if="!addedToFavorite" width="30" height="26" viewBox="0 0 30 26" fill="none">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8.07107 2C4.71811 2 2 4.71811 2 8.07107C2 9.68122 2.63963 11.2254 3.77817 12.364L15 23.5858L26.2218
                12.364C27.3604 11.2254 28 9.68121 28 8.07107C28 4.71811 25.2819 2 21.9289 2C20.3188 2 18.7746 2.63963
                17.636 3.77817L15.7071 5.70711C15.3166 6.09763 14.6834 6.09763 14.2929 5.70711L12.364 3.77818C11.2254
                2.63963 9.68121 2 8.07107 2ZM0 8.07107C0 3.61354 3.61354 0 8.07107 0C10.2116 0 12.2646 0.850343 13.7782
                2.36396L15 3.58579L16.2218 2.36396C17.7354 0.850341 19.7884 0 21.9289 0C26.3865 0 30 3.61354 30
                8.07107C30 10.2116 29.1497 12.2646 27.636 13.7782L15.7071 25.7071C15.3166 26.0976 14.6834 26.0976
                14.2929 25.7071L2.36396 13.7782C0.850339 12.2646 0 10.2116 0 8.07107Z" fill="white"
              />
            </svg>
            <svg v-else width="30" height="26" viewBox="0 0 30 26" fill="none">
              <path
                d="M8.07107 0C3.61354 0 0 3.61354 0 8.07107C0 10.2116 0.850339 12.2646 2.36396 13.7782L14.2929
                25.7071C14.6834 26.0976 15.3166 26.0976 15.7071 25.7071L27.636 13.7782C29.1497 12.2646 30 10.2116
                30 8.07107C30 3.61354 26.3865 0 21.9289 0C19.7884 0 17.7354 0.850341 16.2218 2.36396L15
                3.58579L13.7782 2.36396C12.2646 0.850343 10.2116 0 8.07107 0Z" fill="white"
              />
            </svg>
          </button>

          <button
            class="bg-[#FFD280] w-[80px] h-[80px] rounded-r-2xl hover:bg-[#FFD280] hover:opacity-30 dislike-button"
            @click="addToDislikes"
          >
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0 15C0 6.71573 6.71573 0 15 0C23.2843 0 30 6.71573 30 15C30 23.2843 23.2843 30 15 30C6.71573 30 0
                23.2843 0 15ZM15 2C7.8203 2 2 7.8203 2 15C2 22.1797 7.8203 28 15 28C22.1797 28 28 22.1797 28 15C28
                7.8203 22.1797 2 15 2ZM10 12H8V10H10V12ZM22 12H20V10H22V12ZM7.6 20.2L8.2 19.4C11.6 14.8667 18.4 14.8667
                21.8 19.4L22.4 20.2L20.8 21.4L20.2 20.6C17.6 17.1333 12.4 17.1333 9.8 20.6L9.2 21.4L7.6 20.2Z"
                fill="white"
              />
            </svg>
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
import { router } from '@/router'
import { routeNames } from '@/router/route-names'
console.log(router.currentRoute.value)

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
