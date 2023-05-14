<template>
  <div
    v-for="(breedListItem, idx) in breedList"
    :key="idx"
  >
    <GridModule :breeds="breedListItem" />
  </div>
</template>

<script setup lang="ts">
import type { IBreed } from '@/types/general'

const props = defineProps<{
  list: IBreed[] // TODO describe types
}>()

const breedList = computed(() => {
  const newList = []
  if (props.list.length <= 10) {
    newList.push(props.list)
  } else {
    for (let i = 0; i <= props.list.length; i += 10) {
      newList.push(props.list.slice(i, i + 10))
    }
  }
  return newList
})
</script>
