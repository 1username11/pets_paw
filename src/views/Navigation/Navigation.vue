<template>
  <div>
    <router-link :to="routeNames.home">
      <Logo />
    </router-link>
    <p class="text-5xl font-semibold mt-[85px]" :class="fadeClass">
      Hi intern!
    </p>
    <p class="text-xl font-normal text-gray-400 mt-2.5" :class="fadeClass">
      Welcome to MSI 2021 Front-end test
    </p>
    <p class="text-xl font-medium mt-[60px]" :class="fadeClass">
      Lets start using The Dogs API
    </p>
    <div class="flex flex-row space-x-4 mt-5">
      <NavigationItem
        v-for="navigationItem in navigation"
        :key="navigationItem.name"
        :url="navigationItem.url"
        :name="navigationItem.name"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { routeNames } from '@/router/route-names'
import NavigationItem from './NavigationItem.vue'
import { ref, onMounted } from 'vue'

const navigation: {
  url: string
  name: 'voting' | 'breeds' | 'gallery'
}[] = [
  {
    url: 'src/assets/NavigationImages/vote-table.png',
    name: 'voting'
  },
  {
    url: 'src/assets/NavigationImages/pet-breeds.png',
    name: 'breeds'
  },
  {
    url: 'src/assets/NavigationImages/images-search.png',
    name: 'gallery'
  }
]

const fadeClass = ref('opacity-0')

onMounted(() => {
  setTimeout(() => {
    fadeClass.value = 'opacity-100 transition-opacity duration-1000'
  }, 500)
})
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

.opacity-0 {
  opacity: 0;
}

.opacity-100 {
  opacity: 1;
}
</style>