<template>
  <div v-if="breed">
    <div
      v-for="(gridListItem, idx) in gridList"
      :key="idx"
    >
      <GridModule :breeds="gridListItem" />
    </div>
  </div>
  <div v-else-if="votes">
    <div
      v-for="(gridListItem, idx) in gridList"
      :key="idx"
    >
      <GridModule :votes="gridListItem" @removeFromFavorites="$emit('removeFromFavorites')" />
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  breed?: IBreed[] // TODO describe types
  votes?: IVote[]
}>()

defineEmits(['removeFromFavorites'])

const gridList = computed(() => {
  const newList = []
  if (props.breed) {
    if (props.breed.length <= 10) {
      newList.push(props.breed)
    } else {
      for (let i = 0; i <= props.breed.length; i += 10) {
        newList.push(props.breed.slice(i, i + 10))
      }
    }
    return newList
  } else if (props.votes) {
    if (props.votes.length <= 10) {
      newList.push(props.votes)
    } else {
      for (let i = 0; i <= props.votes.length; i += 10) {
        newList.push(props.votes.slice(i, i + 10))
      }
    }
    return newList
  }
})
</script>
