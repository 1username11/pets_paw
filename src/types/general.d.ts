type TIndexedObject<T = any> = {
  [key: string]: T
}

type TCallbackFn<T extends unknown[] = [], R = void> = (...args: T) => R
interface ILog {
  imageId: string
  action: string
}

interface IImage {
  id: string
  url: string
  width: number
  height: number
}

interface IBreed {
  weight: {
    imperial: string
    metric: string
  }
  height: {
    imperial: string
    metric: string
  }
  id: number
  name: string
  bred_for: string
  breed_group: string
  life_span: string
  temperament: string
  origin: string
  reference_image_id: string
  image: {
    id: string
    width: number
    height: number
    url: string
  }
}
