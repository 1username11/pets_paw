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
            <div
              class="flex items-center justify-center bg-white rounded-3xl w-[60px] h-[60px]
              hover:bg-[#FBE0DC] cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="26"
                viewBox="0 0 30 26"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8.07107 2C4.71811 2 2 4.71811 2 8.07107C2 9.68122 2.63963 11.2254 3.77817 12.364L15
                  23.5858L26.2218
          12.364C27.3604 11.2254 28 9.68121 28 8.07107C28 4.71811 25.2819 2 21.9289 2C20.3188 2 18.7746 2.63963
          17.636 3.77817L15.7071 5.70711C15.3166 6.09763 14.6834 6.09763 14.2929 5.70711L12.364 3.77818C11.2254
          2.63963 9.68121 2 8.07107 2ZM0 8.07107C0 3.61354 3.61354 0 8.07107 0C10.2116 0 12.2646 0.850343 13.7782
          2.36396L15 3.58579L16.2218 2.36396C17.7354 0.850341 19.7884 0 21.9289 0C26.3865 0 30 3.61354 30 8.07107C30
          10.2116 29.1497 12.2646 27.636 13.7782L15.7071 25.7071C15.3166 26.0976 14.6834 26.0976 14.2929
          25.7071L2.36396 13.7782C0.850339 12.2646 0 10.2116 0 8.07107Z" fill="#FF868E"
                />
              </svg>
            </div>
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
            <div
              class="flex items-center justify-center bg-white rounded-3xl w-[60px] h-[60px]
              hover:bg-[#FBE0DC] cursor-pointer"
            >
              <svg
                width="30"
                height="26"
                viewBox="0 0 30 26"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8.07107 2C4.71811 2 2 4.71811 2 8.07107C2 9.68122 2.63963 11.2254 3.77817
                  12.364L15 23.5858L26.2218
          12.364C27.3604 11.2254 28 9.68121 28 8.07107C28 4.71811 25.2819 2 21.9289 2C20.3188 2 18.7746 2.63963
          17.636 3.77817L15.7071 5.70711C15.3166 6.09763 14.6834 6.09763 14.2929 5.70711L12.364 3.77818C11.2254
          2.63963 9.68121 2 8.07107 2ZM0 8.07107C0 3.61354 3.61354 0 8.07107 0C10.2116 0 12.2646 0.850343 13.7782
          2.36396L15 3.58579L16.2218 2.36396C17.7354 0.850341 19.7884 0 21.9289 0C26.3865 0 30 3.61354 30 8.07107C30
          10.2116 29.1497 12.2646 27.636 13.7782L15.7071 25.7071C15.3166 26.0976 14.6834 26.0976 14.2929
          25.7071L2.36396 13.7782C0.850339 12.2646 0 10.2116 0 8.07107Z" fill="#FF868E"
                />
              </svg>
            </div>
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
