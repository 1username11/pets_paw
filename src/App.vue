<template>
  <div class="flex justify-center bg-[#F8F8F7] pt-7 pb-7 w-full min-h-screen max-h-fit space-x-[150px]">
    <Navigation />
    <RouterView />
  </div>
</template>

<script setup lang="ts">
import Navigation from '@/views/Navigation/Navigation.vue'

const generalStore = useGeneralStore()
const { getBreeds } = generalStore

onMounted(getBreeds)
</script>
