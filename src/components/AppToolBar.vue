<template>
  <div class="max-w-[680px] flex justify-between space-x-2.5">
    <div
      class="h-[60px] bg-white py-2.5 px-5 rounded-2xl w-[470px] flex justify-between space-x-1"
    >
      <el-input v-model="searchQuery" class="h-full w-full" placeholder="Search for breeds by name" />

      <div @click="$router.push({ name: routeNames.search})">
        <SearchIcon />
      </div>
    </div>

    <router-link
      class="flex items-center justify-center bg-white rounded-2xl w-[60px] h-[60px] hover:bg-[#FBE0DC] img-wrapper"
      :to="{name: $routeNames.likes}"
    >
      <LikesIcon />
    </router-link>

    <router-link
      class="flex items-center justify-center bg-white rounded-2xl w-[60px] h-[60px] hover:bg-[#FBE0DC]"
      :to="{name: $routeNames.favorite}"
    >
      <FavoritesIcon />
    </router-link>

    <router-link
      class="flex items-center justify-center bg-white rounded-2xl w-[60px] h-[60px] hover:bg-[#FBE0DC]"
      :to="{name: $routeNames.dislikes}"
    >
      <DislikeIcon />
    </router-link>
  </div>
</template>
<script lang="ts" setup>
import { routeNames } from '@/router/route-names'

const generalStore = useGeneralStore()
const { searchQuery } = storeToRefs(generalStore)
</script>

<style scoped lang="scss">
.router-link-active.router-link-exact-active {
  background-color: #FF868E;
  :first-child{
    fill: white
  }
}
</style>
