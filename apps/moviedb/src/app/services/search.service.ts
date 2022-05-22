import {Injectable} from "@angular/core";
import {Observable, of} from "rxjs";
import {Narrative} from "../model/narrative";

const fixture: Narrative[] = [{
  title: 'Fun with Dick & Jane',
  plot: 'After losing their high-paying corporate jobs, an upwardly mobile couple turns to robbing banks to maintain their standard of living.',
  released: 1997,
  director: 'John Doe',
  labels: ['Comedies'],
  countries: [{countryCode: 'us'}],
  cast: [
    {name: 'Jim Carrey'},
    {name: 'Téa Leoni'},
    {name: 'Alec Baldwin'},
    {name: 'Richard Jenkins'},
    {name: 'Angie Harmon'},
    {name: 'John Michael Higgins'},
    {name: 'Richard Burgi'},
    {name: 'Carlos Jacott'},
    {name: 'Aaron Michael Drozin'},
    {name: 'Gloria Garayua'}
  ]
}, {
  title: 'The Mitchells vs. The Machines',
  plot: 'A robot apocalypse put the brakes on their cross-country road trip. Now it’s up to the Mitchells — the world’s weirdest family — to save the human race.',
  director: 'Mike Rianda, Jeff Rowe',
  released: 2021,
  countries: [{
    countryCode: 'us'
  }, {
    countryCode: 'gb'
  }],
  cast: [
    {name: 'Mike Rianda, Jeff Rowe'},
    {name: 'Danny McBride'},
    {name: 'Abbi Jacobson'},
    {name: 'Maya Rudolph'},
    {name: 'Mike Rianda'},
    {name: 'Eric André'},
    {name: 'Olivia Colman'},
    {name: 'Fred Armisen'},
    {name: 'Beck Bennett'},
    {name: 'John Legend'},
    {name: 'Chrissy Teigen'},
    {name: 'Blake Griffin'},
    {name: 'Conan O\'Brien'},
    {name: 'Charlyne Yi'}
  ],
  labels: [
    'Children & Family Movies', 'Comedies'
  ]
}

]


@Injectable({
  providedIn: 'root'
})

export class SearchService {
  search(query: string): Observable<Narrative[]> {
    return of(fixture)
  }
}
