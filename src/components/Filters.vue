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
        v-for="limitItem in limits"
        :key="limitItem"
        :label="'limit' + ' ' + limitItem"
        :value="limitItem"
      />
    </el-select>

    <div class="cursor-pointer" @click="sortingType === 'asc' ? sortingType = 'desc': sortingType='asc'">
      <AscendingSorting v-if="sortingType === 'asc'" />

      <DecsendingSorting v-else />
    </div>

    <div class="flex items-center justify-center bg-[#F8F8F7] w-[40px] h-[40px] rounded-2xl">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="20"
        viewBox="0 0 18 20"
        fill="none"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M8.48189 2.49989L6.93396 0.953004L7.88633 0L11.0577 3.16928L7.88634 6.33873L6.93395
 5.38576L8.47232 3.84832C4.51244 3.99813 1.3473 7.25498 1.3473 11.2478C1.3473 15.3361
 4.66547 18.6527 8.75744 18.6527C12.8494 18.6527 16.1676 15.3361 16.1676
 11.2478V10.5742H17.5149V11.2478C17.5149 16.081 13.5927 20 8.75744 20C3.92221
 20 0 16.081 0 11.2478C0 6.50682 3.77407 2.64542 8.48189 2.49989Z" fill="#FF868E"
        />
      </svg>
    </div>
  </div>
</template>

<script lang="ts" setup>
const generalStore = useGeneralStore()
const { breedSelectValue, limit, sortingType, breedsNames } = storeToRefs(generalStore)

const limits = [5, 10, 15, 20]

</script>

<style lang="scss">
.el-select{
  .el-input__wrapper {
    padding: 5px;
    border-radius: 10px;
    cursor: pointer;
}
}
</style>
