<template>
  <div class="flex flex-col">
    <AppToolBar />
    <div class="flex flex-col justify-center bg-white max-w-[680px] py-5 px-4 mt-2.5 rounded-2xl">
      <BackButton :page="$routeNames.breedsInfo" class="mr-2.5" />
      <el-image :src="breedImage[0]?.url" class="rounded-2xl mt-5" fit="cover" />
      <div class="flex flex-col px-10 pb-10 border border-[#FBE0DC] rounded-2xl mt-12">
        <div class="flex flex-col items-center">
          <div
            class="flex justify-center items-center text-center w-[193px] h-[62px] -mt-[31px]
          bg-white z-50 rounded-2xl text-4xl"
          >
            {{ breed?.name  }}
          </div>
          <div class="text-center text-xl text-gray-400">{{ breed?.description }}</div>
        </div>
        <div class="flex justify-centre space-x-[150px]">
          <div>
            <div>Temperament</div>
            <div class="text-gray-400">{{ breed?.temperament }}</div>
          </div>
          <div class="text-gray-400">
            <div><span class="text-gray-900">Origin:</span> {{ breed?.origin }}</div>
            <div><span class="text-gray-900">Weight:</span> {{ breed?.weight.metric }} kgs</div>
            <div><span class="text-gray-900">Life span:</span> {{ breed?.life_span }} years</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const router = useRouter()
const breed = ref<IBreed>()
const breedImage = ref([] as IImage[])

async function getBreedById () {
  breed.value = await generalService.getBreedById(router.currentRoute.value.params.id as string)
}
async function getBreedImage () {
  breedImage.value = await generalService.getBreedImages(router.currentRoute.value.params.id as string)
}

onMounted(async () => {
  await getBreedById()
  await getBreedImage()
})
</script>
