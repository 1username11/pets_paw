class GeneralService {
  getImage () {
    return useHttp.get('/images/search')
  }

  addToFavorites (id: string) {
    return useHttp.post('/favourites', { image_id: id })
  }

  removeFromFavorites (id: number) {
    return useHttp.delete(`/favourites/${id}`)
  }

  vote (payload: any) { // TODO: add type for payload
    return useHttp.post('/votes', payload)
  }

  getBreeds (limit: number, page: number) {
    return useHttp.get(`/breeds?limit=${limit}&page=${page}`)
  }

  getBreedById (id: string) {
    return useHttp.get(`/breeds/${id}`)
  }

  getBreedImages (id: string) {
    return useHttp.get(`/images/search?breed_ids=${id}&include_breeds=true`)
  }

  getVoted () {
    return useHttp.get('/votes')
  }

  getFavorites () {
    return useHttp.get('/favourites')
  }
}

export const generalService = new GeneralService()
