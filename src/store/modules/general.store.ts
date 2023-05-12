// the first argument is a unique id of the store across your application
export const useGeneralStore = defineStore('generalStore', () => {
  const image = ref<IImage>()
  async function getImage () {
    try {
      const res = await generalService.getImage()
      console.log('response', res)
      image.value = res[0]
      console.log('image', image)
    } catch (e) {
      console.log(e)
    }
  }

  return {
    getImage,
    image
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useGeneralStore, import.meta.hot))
}
