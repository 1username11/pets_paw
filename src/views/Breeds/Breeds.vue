<template>
  <div class="flex flex-col">
    <BreedsSearch />
    <div class="w-[680px] bg-white mt-5 rounded-2xl py-5 px-4 h-fit">
      <div class="flex flex-row items-center">
        <BackButton />
        <div
          class="flex flex-col justify-center  py-2.5 w-[138px] h-10 rounded-lg text-[12px] tracking-widest  text-center
         bg-[#FF868E] text-white cursor-pointer"
        >
          BREEDS
        </div>
        <BreedsFilter />
      </div>
      <Grid :images="images" />
    </div>
  </div>
</template>

<script setup lang="ts">
const images = [
  'src/assets/image 1.png',
  'src/assets/image 1.png',
  'src/assets/image 1.png',
  'src/assets/image 1.png',
  'src/assets/image 1.png',
  'src/assets/image 1.png',
  'src/assets/image 1.png',
  'src/assets/image 1.png',
  'src/assets/image 1.png',
  'src/assets/image 1.png'
  // 'src/assets/image 1.png',
  // 'src/assets/image 1.png',
]
</script>
