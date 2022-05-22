import {Narrative} from "./narrative";

export interface NarrativeModel {
  cast: string[],
  country: string[],
  dateAdded: string,
  description: string,
  director: string,
  duration_minutes?: number,
  duration_seasons?: number,
  id: string,
  listed_in: string[],
  rating: string,
  release_year: number,
  title: string,
  type: 'Movie' | 'TV Show'
}

export function convert(model: NarrativeModel): Narrative {
  return {
    title: model.title,
    countries: model.country.map(countryCode => ({countryCode: countryCode.toLowerCase()})),
    released: model.release_year,
    labels: model.listed_in,
    cast: model.cast.map(name => ({name})),
    director: model.director,
    plot: model.description
  }
}
