<template>
  <div class="flex space-x-2 items-center ">
    <div
      class="flex justify-center w-10 h-10 items-center bg-[#FBE0DC] rounded-lg cursor-pointer"
      @click="$router.back()"
    >
      <BackButtonIcon />
    </div>

    <div
      v-if="title !== 'breedsInfo'"
      class="flex flex-col justify-center  py-2.5 w-[138px]
       h-10 rounded-lg text-[12px] text-lg tracking-widest  text-center
       bg-[#FF868E] text-white cursor-default uppercase"
    >
      {{ title }}
    </div>
    
    <div
      v-else-if="title === 'breedsInfo'"
      class="flex flex-col justify-center  py-2.5 w-[138px]
       h-10 rounded-lg text-[12px] text-lg tracking-widest  text-center
       bg-[#FBE0DC] text-[#FF868E] cursor-default uppercase"
    >
      {{ title }}
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>
