<template>
  <router-link class="flex flex-col group" :to="{name: $routeNames[name]}">
    <div
      class="flex flex-col justify-center img-wrapper w-[138px] h-[198px] bg-[#B4B7FF]
          rounded-3xl border-4 border-[#E1E2FF] border-opacity-60
          group-hover:border-white"
      :class="{
        'bg-[#B4B7FF] border-[#E1E2FF]': names.voting,
        'bg-[#97EAB9] border-[#D5F7E3]': names.breeds,
        'bg-[#FFD280] border-[#FFEDCC]': names.gallery
      }"
    >
      <img
        v-if="names.breeds"
        class="mx-auto h-[163px] w-[117px]"
        src="@/assets/NavigationImages/pet-breeds.png"
        alt="breeds"
      >
      <img
        v-else-if="names.voting"
        class="mx-auto h-[124px] w-[100px]"
        src="@/assets/NavigationImages/vote-table.png"
        alt="voting"
      >
      <img
        v-else-if="names.gallery"
        class="mx-auto h-[190px] w-[112px]"
        src="@/assets/NavigationImages/images-search.png"
        alt="gallery"
      >
    </div>
    <div
      class="text-wrapper group-hover:bg-[#FBE0DC] flex flex-col justify-center py-2.5 w-[138px]
          h-[36px] bg-white rounded-lg text-[12px] mt-2.5
          tracking-widest text-[#FF868E] text-center cursor-pointer uppercase"
    >
      {{ name }}
    </div>
  </router-link>
</template>

<script lang="ts" setup>
const props = defineProps<{
  name: 'breeds' | 'voting' | 'gallery'
}>()

const names = {
  breeds: props.name === 'breeds',
  voting: props.name === 'voting',
  gallery: props.name === 'gallery'
}
</script>

<style scoped lang="scss">
.router-link-active.router-link-exact-active {
  .img-wrapper {
    border-color: #FBE0DC;
  }

  .text-wrapper {
    background-color: #FF868E;
    color: white;
  }
}
</style>
