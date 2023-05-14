<template>
  <div class="grid-container">
    <div
      v-for="(breed, idx) in breeds"
      :key="breed.id"
      :class="styleSwitcher(styles, idx)"
    >
      <el-image :src="breed.image.url" alt="No image" fit="cover" class="h-full w-full object-center" lazy/>
      <!-- TODO check response object and make interface for describe it -->
    </div>
  </div>
</template>

<script setup lang="ts">
import type { IBreed } from '@/types/general';

defineProps<{
  breeds: IBreed[]
}>()

const styles = ['item1', 'item2', 'item3', 'item4', 'item5', 'item6', 'item7', 'item8', 'item9', 'item10']

function styleSwitcher (styles: string[], idx: number) {
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
