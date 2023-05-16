<template>
  <div class="flex justify-between w-full space-x-1">
    <el-select
      v-model="breedSelectValue"
      clearable
      placeholder="All breeds"
    >
      <el-option
        v-for="breedItem in breedsNames"
        :key="breedItem"
        :label="breedItem"
        :value="breedItem"
      />
    </el-select>

    <el-select v-model="limit" clearable placeholder="Limit">
      <el-option
        v-for="limitItem in [5, 10, 15, 20]"
        :key="limitItem"
        :label="'limit' + ' ' + limitItem"
        :value="limitItem"
      />
    </el-select>

    <div class="cursor-pointer" @click="sortingType === 'asc' ? sortingType = 'desc': sortingType='asc'">
      <AscendingSorting v-if="sortingType === 'asc'" />

      <DecsendingSorting v-else />
    </div>

    <div
      class="flex items-center justify-center bg-[#F8F8F7] w-[40px] h-[40px] rounded-2xl cursor-pointer"
      @click="getBreeds"
    >
      <RefreshIcon />
    </div>
  </div>
</template>

<script lang="ts" setup>
const generalStore = useGeneralStore()
const { getBreeds } = generalStore
const { breedSelectValue, limit, sortingType, breedsNames } = storeToRefs(generalStore)
</script>

<style lang="scss">
.el-select{
  .el-input__wrapper {
    padding: 5px;
    border-radius: 10px;
    cursor: pointer;
}
}
.el-select-dropdown{
  &__list{
    max-height: 200px;
    overflow: auto;
  }
}
</style>
