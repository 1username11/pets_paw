import type { IBreed } from "@/types/general"

export const useGeneralStore = defineStore('generalStore', () => {
  const breedsList = ref<IBreed[]>([])
  async function getBreeds () {
    const res = await generalService.getBreeds(10, 0)
    breedsList.value = res
  }

  return {
    getBreeds
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useGeneralStore, import.meta.hot))
}
