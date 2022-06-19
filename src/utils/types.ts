export type CitiesIn100 = {
    name: string
    country: string
    flag: string
    image: string
}

export type Continent = {
    id: string
    name: string
    description: string
    comment: string
    image: string
    countries: number
    languages: number
    citiesIn100: CitiesIn100[]
}