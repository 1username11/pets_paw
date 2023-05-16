<template>
  <div class="grid-container">
    <div
      v-for="(item, idx) in list"
      :key="item.id"
      class="relative"
      :class="gridClassesSwitcher(gridClasses, idx)"
      @mouseenter="onMouseEnterHandler(item.id)"
      @mouseleave="onMouseLeaveHandler(item.id)"
    >
      <el-image
        :src="item.image?.url"
        alt="No image"
        fit="cover"
        class="h-full w-full object-center"
        lazy
      />

      <template v-if="listType.breeds">
        <div
          v-if="isHovered && item.id === hoveredItem"
          class="absolute z-50 w-full h-full top-0 bg-[#FF868E] bg-opacity-60"
        >
          <div
            v-if="currentRoute.gallery"
            class="flex items-center justify-center"
            @click="addToFavorites(item.image.id as string)"
          >
            <AddToFavoriteButton />
          </div>
          <div v-else-if="currentRoute.breeds || currentRoute.search" class="flex items-end justify-center pb-3">
            <div
              class="flex items-center justify-center w-[150px] truncate h-8 bg-white rounded-xl
            text-[#FF868E] cursor-pointer hover:bg-[#FBE0DC] active:bg-[#FF868E] active:text-white px-3"
              @click="router.push({ name: routeNames.breedsInfo, params: { id: item.id } })"
            >
              {{ item.name }}
            </div>
          </div>
        </div>
      </template>

      <template v-else-if="!(currentRoute.likes || currentRoute.dislikes)">
        <div
          v-if="isHovered && item.id === hoveredItem"
          class="absolute z-50 w-full h-full top-0 bg-[#FF868E] bg-opacity-60"
        >
          <div
            v-if="currentRoute.favorites"
            class="flex items-center justify-center"
            @click="removeFromFavorites(item.id as number)"
          >
            <AddToFavoriteButton />
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import { router } from '@/router'
import { routeNames } from '@/router/route-names'

const props = defineProps<{
  list: IBreed[] | IVote[]
}>()

const emit = defineEmits(['removeFromFavorites'])

const isHovered = ref(false)
const hoveredItem = ref<string | number>('')

const gridClasses = ['item1', 'item2', 'item3', 'item4', 'item5', 'item6', 'item7', 'item8', 'item9', 'item10']

const currentRoute = {
  breeds: router.currentRoute.value.name === 'breeds',
  gallery: router.currentRoute.value.name === 'gallery',
  favorites: router.currentRoute.value.name === 'favorites',
  search: router.currentRoute.value.name === 'search',
  likes: router.currentRoute.value.name === 'likes',
  dislikes: router.currentRoute.value.name === 'dislikes'
}

const listType = computed(() => ({
  breeds: Object.hasOwn(props.list[0], 'origin'),
  votes: !Object.hasOwn(props.list[0], 'origin')
}))

async function addToFavorites (id: string) {
  await generalService.addToFavorites(id)
}

async function removeFromFavorites (id: number) {
  await generalService.removeFromFavorites(id)
  emit('removeFromFavorites')
}

function onMouseEnterHandler (id: string | number) {
  hoveredItem.value = id
  isHovered.value = true
}

function onMouseLeaveHandler (id: string | number) {
  hoveredItem.value = typeof id === 'number' ? -1 : ''
  isHovered.value = false
}

function gridClassesSwitcher (styles: string[], idx: number) {
  return styles[idx % 10]
}
</script>

<style lang="scss">
.grid-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-auto-rows: 100px;
  gap: 1rem;
  margin: 1rem;
  & * {
    border-radius: 20px;
    height: 100%;
    background-blend-mode: multiply;
  }
}

.item1 {
  grid-column: 1 / 2;
  grid-row: 1 / 3;
  background-color: white;
}

.item2 {
  grid-column: 2 / 3;
  grid-row: 1 / 2;
  background-color: white;
}

.item3 {
  grid-column: 3 / 4;
  grid-row: 1 / 2;
  background-color: white;
}

.item4 {
  grid-column: 1 / 2;
  grid-row: 3 / 4;
  background-color: white;
}

.item5 {
  grid-column: 2 / 4;
  grid-row: 2 / 4;
  background-color: white;
}

.item6 {
  grid-column: 1 / 2;
  grid-row: 4 / 5;
  background-color: white;
}

.item7 {
  grid-column: 2 / 3;
  grid-row: 4 / 5;
  background-color: white;
}

.item8 {
  grid-column: 3 / 4;
  grid-row: 4 / 6;
  background-color: white;
}

.item9 {
  grid-column: 1 / 3;
  grid-row: 5 / 7;
  background-color: white;
}

.item10 {
  grid-column: 3 / 4;
  grid-row: 6 / 7;
  background-color: white;
}
</style>
