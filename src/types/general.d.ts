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

// interface IBreed {
//   weight: {
//     imperial: string
//     metric: string
//   }
//   height: {
//     imperial: string
//     metric: string
//   }
//   id: number
//   name: string
//   bred_for: string
//   breed_group: string
//   life_span: string
//   temperament: string
//   origin: string
//   reference_image_id: string
//   image: {
//     id: string
//     width: number
//     height: number
//     url: string
//   }
// }

export interface IBreed {
  weight: Weight
  id: string
  name: string
  cfa_url?: string
  vetstreet_url?: string
  vcahospitals_url?: string
  temperament: string
  origin: string
  country_codes: string
  country_code: string
  description: string
  life_span: string
  indoor: number
  lap?: number
  alt_names: string
  adaptability: number
  affection_level: number
  child_friendly: number
  dog_friendly: number
  energy_level: number
  grooming: number
  health_issues: number
  intelligence: number
  shedding_level: number
  social_needs: number
  stranger_friendly: number
  vocalisation: number
  experimental: number
  hairless: number
  natural: number
  rare: number
  rex: number
  suppressed_tail: number
  short_legs: number
  wikipedia_url: string
  hypoallergenic: number
  reference_image_id: string
  image: IImage
}

export interface IWeight {
  imperial: string
  metric: string
}
