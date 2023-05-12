<template>
  <el-select v-model="breed" clearable placeholder="All breeds" class="w-32 h-10">
    <el-option
      v-for="option in options"
      :key="option"
      :label="option"
      :value="option"
    />
  </el-select>
</template>

<script setup lang="ts">
const breed = ref<string>()
const options = ['pes-patron', 'hatiko', 'bascervile hound']

</script>
