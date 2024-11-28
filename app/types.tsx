export type Character = {
    _id: number
    films: string[]
    shortFilms: string[]
    tvShows: string[]
    videoGames: string[]
    parkAttractions: string[]
    allies: string[]
    enemies: string[]
    name: string
    imageUrl: string
    url: string
    updatedAt: string
    sourceUrl: string
  }

export type Profile = {
    firstName: string
    lastName: string
    updatedAt: string
    city: string
    state: string
    favoriteCharacter: string
    favoriteRide: string
    favoriteMovie: string
    favoriteDisneyland: string
    birthdate: string
  }
  