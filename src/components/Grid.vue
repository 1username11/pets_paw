<template>
  <div
    v-for="(gridListItem, idx) in gridList"
    :key="idx"
  >
    <GridModule :list="gridListItem" @remove-from-favorites="$emit('removeFromFavorites')" />
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  list: IBreed[] | IVote[]
}>()

defineEmits(['removeFromFavorites'])

const gridList = computed(() => {
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
