class GeneralService {
  getImage () {
    return useHttp.get('v1/images/search')
  }

  addToFavorites (payload: IImage) {
    return useHttp.post('v1/favourites', { image_id: payload.id }, {
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': import.meta.env.VITE_API_URL
      }
    })
  }

  getImages (limit: number, page: number): Promise<IBreed[]> {
    return useHttp.get(`v1/breeds?limit=${limit}&page=${page}`)
  }
}

export const generalService = new GeneralService()
