export const useGeneralStore = defineStore('generalStore', () => {
  const breedsList = ref<IBreed[]>([])
  const breedSelectValue = ref<string>('')
  const limit = ref<number | undefined>()
  const sortingType = ref<'asc' | 'desc'>('asc')
  const breedsNames = computed<string[]>(() => breedsList.value.map((breed) => breed.name))
  const searchQuery = ref<string>('')
  const breedsForSearch = computed(() => {
    return breedsList.value
      .filter((breed: IBreed) => breed.name.toLowerCase().includes(searchQuery.value.toLowerCase()))
  })

  async function getBreeds () {
    breedsList.value = await generalService.getBreeds(100, 0)
  }

  async function getVoted (value: 1 | -1) {
    if (value === 1) {
      const res = await generalService.getVoted()
      return res.filter((vote: IVote) => vote.value === 1)
    } else if (value === -1) {
      const res = await generalService.getVoted()
      return res.filter((vote: IVote) => vote.value === -1)
    }
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

  function resetFilters () {
    breedSelectValue.value = ''
    limit.value = undefined
    sortingType.value = 'asc'
  }
  return {
    searchQuery,
    breedsList,
    breedSelectValue,
    limit,
    sortingType,
    breedsNames,
    selectedBreeds,
    breedsForSearch,
    getBreeds,
    getVoted,
    resetFilters
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useGeneralStore, import.meta.hot))
}
