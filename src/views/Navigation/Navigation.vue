<template>
  <div>
    <router-link :to="routeNames.home">
      <Logo />
    </router-link>
    <p class="text-5xl font-semibold mt-[85px]">
      Hi intern!
    </p>
    <p class="text-xl font-normal text-gray-400 mt-2.5">
      Welcome to MSI 2021 Front-end test
    </p>
    <p class="text-xl font-medium mt-[60px]">
      Lets start using The Dogs API
    </p>
    <div class="flex flex-row space-x-4 mt-5">
      <router-link class="flex flex-col link" :to="routeNames.voting">
        <div
          class="flex flex-col justify-center w-[138px] h-[198px] bg-[#B4B7FF] rounded-3xl border-4
      border-[#E1E2FF] border-opacity-60"
        >
          <img class="h-[124px] w-[100px] mx-auto" src="../../assets/NavigationImages/vote-table.png" alt="image">
        </div>
        <div
          class="flex flex-col justify-center  py-2.5 w-[138px] h-[36px] bg-white rounded-lg text-[12px] mt-2.5
        tracking-widest text-[#FF868E] text-center
        hover:bg-[#FBE0DC] active:bg-[#FF868E] active:text-white cursor-pointer"
        >
          VOTING
        </div>
      </router-link>
      <router-link :to="routeNames.breeds" class="flex flex-col link">
        <div
          class="flex flex-col justify-center w-[138px] h-[198px] bg-[#97EAB9] rounded-3xl border-4
      border-[#D5F7E3] border-opacity-60"
        >
          <img class="h-[163px] w-[117px] mx-auto" src="../../assets/NavigationImages/pet-breeds.png" alt="image">
        </div>
        <div
          class="flex flex-col justify-center  py-2.5 w-[138px] h-[36px] bg-white rounded-lg text-[12px] mt-2.5
        tracking-widest text-[#FF868E] text-center
        hover:bg-[#FBE0DC] active:bg-[#FF868E] active:text-white cursor-pointer"
        >
          BREEDS
        </div>
      </router-link>
      <router-link :to="routeNames.gallery" class="flex flex-col link">
        <div
          class="flex flex-col justify-center w-[138px] h-[198px] bg-[#FFD280] rounded-3xl border-4
      border-[#FFEDCC] border-opacity-60"
        >
          <img class="h-[190px] w-[112px] mx-auto" src="../../assets/NavigationImages/images-search.png" alt="image">
        </div>
        <div
          class="flex flex-col justify-center  py-2.5 w-[138px] h-[36px] bg-white rounded-lg text-[12px] mt-2.5
        tracking-widest text-[#FF868E] text-center
        hover:bg-[#FBE0DC] active:bg-[#FF868E] active:text-white cursor-pointer"
        >
          GALLERY
        </div>
      </router-link>
    </div>
  </div>
</template>
<script setup lang="ts">
import { routeNames } from '@/router/route-names'
</script>

<style scoped lang="scss">
.link{
  &:hover{
    :first-child{
      border-color: white;
    }
  }
  &:active{
    :first-child{
      border-color: #FBE0DC;
    }
  }

}
</style>
