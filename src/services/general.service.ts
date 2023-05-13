class GeneralService {
  getImage () {
    return useHttp.get('/images/search')
  }

  addToFavorites (id: string) {
    return useHttp.post('/favourites', { image_id: id })
  }

  vote (payload: any) { // TODO: add type for payload
    return useHttp.post('/votes', payload)
  }

  getImages (limit: number, page: number): Promise<IBreed[]> {
    return useHttp.get(`/breeds?limit=${limit}&page=${page}`)
  }
}

export const generalService = new GeneralService()
