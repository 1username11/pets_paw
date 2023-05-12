<template>
  <el-select v-model="limit" clearable placeholder="Limit" class="w-24 h-10">
    <el-option
      v-for="limit in options"
      :key="limit"
      class="w-full h-full"
      :label="limit"
      :value="limit"
    />
  </el-select>
</template>
<script setup lang="ts">
const limit = ref<string>()
const options = ['limit 5', 'limit 10', 'limit 15', 'limit 20']

</script>
