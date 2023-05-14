import type { IBreed } from '@/types/general'

export const useGeneralStore = defineStore('generalStore', () => {
  const breedsList = ref<IBreed[]>([])
  const breedSelectValue = ref<string>('')
  const limit = ref<number | undefined>()
  const sortingType = ref<'asc' | 'desc'>('asc')
  const breedsNames = computed<string[]>(() => breedsList.value.map((breed) => breed.name))

  async function getBreeds () {
    breedsList.value = await generalService.getBreeds(20, 0)
  }

  const selectedBreeds = computed(() => {
    const slicedBreeds = limit.value
      ? breedsList.value.slice(0, limit.value)
      : breedsList.value.slice(0, 10)
    const sortedBreeds = slicedBreeds
      .sort((a, b) => (sortingType.value === 'asc' ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)))
    const filteredBreeds = breedSelectValue.value
      ? sortedBreeds.filter(breed => breed.name === breedSelectValue.value)
      : sortedBreeds
    return filteredBreeds
  })
  return {
    breedsList,
    breedSelectValue,
    limit,
    sortingType,
    breedsNames,
    selectedBreeds,
    getBreeds
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useGeneralStore, import.meta.hot))
}
