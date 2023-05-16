<template>
  <div
    v-if="log.action === 'Likes'"
    class="flex justify-between py-4 px-6 w-full h-[60px] bg-[#F8F8F7] rounded-2xl"
  >
    <div class="py-1 px-3 bg-white rounded-2xl">
      {{ `${date.getHours()}:${date.getMinutes()}` }}
    </div>

    <div>
      Image ID: {{ log.imageId }} was added to {{ log.action }}
    </div>

    <div>
      <LogLikeIcon />
    </div>
  </div>
  <div
    v-else-if="log.action === 'Favorites'"
    class="flex justify-between py-4 px-6 w-full h-[60px] bg-[#F8F8F7] rounded-2xl"
  >
    <div class="py-1 px-3 bg-white rounded-2xl">
      {{ `${date.getHours()}:${date.getMinutes()}` }}
    </div>

    <div>
      Image ID: {{ log.imageId }} was added to {{ log.action }}
    </div>

    <div>
      <LogAddedToFavoriteIcon />
    </div>
  </div>
  <div
    v-else-if="log.action === 'Dislikes'"
    class="flex justify-between py-4 px-6 w-full h-[60px] bg-[#F8F8F7] rounded-2xl"
  >
    <div class="py-1 px-3 bg-white rounded-2xl">
      {{ `${date.getHours()}:${date.getMinutes()}` }}
    </div>

    <div>
      Image ID: {{ log.imageId }} was added to {{ log.action }}
    </div>

    <div>
      <LogDislikeIcon />
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  log: ILog
}>()
const date = new Date()
</script>
