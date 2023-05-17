<template>
  <div
    class="flex justify-between py-4 px-6 w-full h-[60px] bg-[#F8F8F7] rounded-2xl"
  >
    <div class="py-1 px-3 bg-white rounded-2xl">
      {{ `${hours}:${minutes}` }}
    </div>

    <div>
      Image ID: {{ log.imageId }} was added to {{ log.action }}
    </div>

    <div v-if="log.action === 'Likes'">
      <LogLikeIcon />
    </div>
    <div v-else-if="log.action === 'Favorites'">
      <LogAddedToFavoriteIcon />
    </div>
    <div v-else-if="log.action === 'Dislikes'">
      <LogDislikeIcon />
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  log: ILog
}>()
const date = new Date()
const hours = date.getHours().toString().padStart(2, '0')
const minutes = date.getMinutes().toString().padStart(2, '0')
</script>
