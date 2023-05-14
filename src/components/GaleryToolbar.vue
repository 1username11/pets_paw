<template>
  <div class="flex flex-col justify-between bg-gray-200 h-[156px] rounded-2xl px-5 py-2.5 mt-5">
    <div class="flex flex-row justify-between">
      <div>
        <p class="text-gray-500 text-sm">Order</p>
        <el-select v-model="order" clearable placeholder="Order" class="w-[290px] h-10 rounded-2xl">
          <el-option
            v-for="orderItem in orders"
            :key="orderItem"
            class="w-full h-full"
            :label="orderItem"
            :value="orderItem"
          />
        </el-select>
      </div>

      <div>
        <p class="text-gray-500 text-sm">Type</p>
        <el-select v-model="type" clearable placeholder="Type" class="w-[290px] h-10">
          <el-option
            v-for="typeItem in types"
            :key="typeItem"
            class="w-full h-full"
            :label="typeItem"
            :value="typeItem"
          />
        </el-select>
      </div>
    </div>

    <div class="flex flex-row justify-between">
      <div>
        <p class="text-gray-500 text-sm">Breed</p>
        <el-select v-model="breed" clearable placeholder="Breed" class="w-24 h-10">
          <el-option
            v-for="breedItem in breeds"
            :key="breedItem"
            class="w-full h-full"
            :label="breedItem"
            :value="breedItem"
          />
        </el-select>
      </div>

      <div>
        <p class="text-gray-500 text-sm">Limit</p>
        <el-select v-model="limit" clearable placeholder="Limit" class="w-24 h-10" @change="">
          <el-option
            v-for="limitItem in limits"
            :key="limitItem"
            class="w-full h-full"
            :label="limitItem"
            :value="limitItem"
          />
        </el-select>
      </div>

      <button class="w-10 h-10 bg-white rounded-2xl">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="20"
          viewBox="0 0 18 20"
          fill="none"
        >
          <path
            fill-rule="evenodd" clip-rule="evenodd"
            d="M8.48189 2.49989L6.93396 0.953004L7.88633 0
            L11.0577 3.16928L7.88634 6.33873L6.93395 5.38576
            L8.47232 3.84832C4.51244 3.99813 1.3473 7.25498
            1.3473 11.2478C1.3473 15.3361 4.66547 18.6527
            8.75744 18.6527C12.8494 18.6527 16.1676 15.3361
            16.1676 11.2478V10.5742H17.5149V11.2478C17.5149
            16.081 13.5927 20 8.75744 20C3.92221 20 0
            16.081 0 11.2478C0 6.50682 3.77407 2.64542
            8.48189 2.49989Z" fill="#FF868E"
          />
        </svg>
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>

const order = ref()
const orders = ['random', 'asc', 'dsc']

const type = ref()
const types = ['All', 'Static', 'Animated']

const breed = ref()
defineProps<string[]>()
const limit = ref()
const limits = [5, 10, 15, 20]
</script>
