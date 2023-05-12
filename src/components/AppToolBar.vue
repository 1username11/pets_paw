<template>
  <div class="max-w-[680px] flex justify-between space-x-2.5">
    <div class="h-[60px] bg-white py-2.5 px-5 rounded-3xl w-[470px] flex justify-between space-x-1">
      <input type="text" class="h-full w-full" placeholder="Search for breeds by name">
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
        <rect width="40" height="40" rx="10" fill="#FBE0DC" />
        <g clip-path="url(#clip0_82_87)">
          <path
            d="M29.361 28.2168L24.601 23.2662C25.8249 21.8113 26.4954 19.9807 26.4954 18.075C26.4954 13.6225 22.8729
        10 18.4205 10C13.968 10 10.3455 13.6225 10.3455 18.075C10.3455 22.5275 13.968 26.15 18.4205 26.15C20.092 26.15
         21.6849 25.6458 23.0467 24.6888L27.8429 29.677C28.0434 29.8852 28.313 30 28.602 30C28.8755 30 29.1349 29.8957
          29.3319 29.7061C29.7504 29.3034 29.7637 28.6357 29.361 28.2168ZM18.4205 12.1065C21.7115 12.1065 24.3889
           14.7839 24.3889 18.075C24.3889 21.3661 21.7115 24.0435 18.4205 24.0435C15.1294 24.0435 12.452 21.3661
           12.452 18.075C12.452 14.7839 15.1294 12.1065 18.4205 12.1065Z" fill="#FF868E"
          />
        </g>
        <defs>
          <clipPath id="clip0_82_87">
            <rect width="20" height="20" fill="white" transform="translate(10 10)" />
          </clipPath>
        </defs>
      </svg>
    </div>
    <button class="bg-white rounded-3xl w-[60px] h-[60px]" @click="$router.push({name: $routeNames.likes})">
      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M0 15C0 6.71573 6.71573 0 15 0C23.2843 0 30 6.71573 30 15C30 23.2843 23.2843 30 15 30C6.71573 30 0 23.2843 0 15ZM15 2C7.8203 2 2 7.8203 2 15C2 22.1797 7.8203 28 15 28C22.1797 28 28 22.1797 28 15C28 7.8203 22.1797 2 15 2ZM10 12H8V10H10V12ZM22 12H20V10H22V12ZM9.2 16.6L9.8 17.4C12.4 20.8667 17.6 20.8667 20.2 17.4L20.8 16.6L22.4 17.8L21.8 18.6C18.4 23.1333 11.6 23.1333 8.2 18.6L7.6 17.8L9.2 16.6Z" fill="#FF868E" />
      </svg>
    </button>
    <button class="bg-white rounded-3xl w-[60px] h-[60px]" @click="$router.push({name: $routeNames.favorite})">
      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="26" viewBox="0 0 30 26" fill="none">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M8.07107 2C4.71811 2 2 4.71811 2 8.07107C2 9.68122 2.63963 11.2254 3.77817 12.364L15 23.5858L26.2218 12.364C27.3604 11.2254 28 9.68121 28 8.07107C28 4.71811 25.2819 2 21.9289 2C20.3188 2 18.7746 2.63963 17.636 3.77817L15.7071 5.70711C15.3166 6.09763 14.6834 6.09763 14.2929 5.70711L12.364 3.77818C11.2254 2.63963 9.68121 2 8.07107 2ZM0 8.07107C0 3.61354 3.61354 0 8.07107 0C10.2116 0 12.2646 0.850343 13.7782 2.36396L15 3.58579L16.2218 2.36396C17.7354 0.850341 19.7884 0 21.9289 0C26.3865 0 30 3.61354 30 8.07107C30 10.2116 29.1497 12.2646 27.636 13.7782L15.7071 25.7071C15.3166 26.0976 14.6834 26.0976 14.2929 25.7071L2.36396 13.7782C0.850339 12.2646 0 10.2116 0 8.07107Z" fill="#FF868E" />
      </svg>
    </button>
    <button class="bg-white rounded-3xl w-[60px] h-[60px]" @click="$router.push({name: $routeNames.dislikes})">
      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M0 15C0 6.71573 6.71573 0 15 0C23.2843 0 30 6.71573 30 15C30 23.2843 23.2843 30 15 30C6.71573 30 0 23.2843 0 15ZM15 2C7.8203 2 2 7.8203 2 15C2 22.1797 7.8203 28 15 28C22.1797 28 28 22.1797 28 15C28 7.8203 22.1797 2 15 2ZM10 12H8V10H10V12ZM22 12H20V10H22V12ZM7.6 20.2L8.2 19.4C11.6 14.8667 18.4 14.8667 21.8 19.4L22.4 20.2L20.8 21.4L20.2 20.6C17.6 17.1333 12.4 17.1333 9.8 20.6L9.2 21.4L7.6 20.2Z" fill="#FF868E" />
      </svg>
    </button>
  </div>
</template>
<style scoped lang="scss">
button:hover{
  background-color:#FBE0DC;
}
button:active{
  :first-child{
    fill: white;
  }
  background-color: #FF868E;
}
</style>
