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

    <div class="flex  space-x-4 mt-5">
      <NavigationItem
        v-for="navigationItem in navigation"
        :key="navigationItem"
        :name="navigationItem"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { routeNames } from '@/router/route-names'
import NavigationItem from './NavigationItem.vue'

const navigation = ['voting', 'breeds', 'gallery'] as const
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
