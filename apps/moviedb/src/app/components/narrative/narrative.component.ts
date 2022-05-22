import {Component, Input} from "@angular/core";
import {Narrative} from "../../model/narrative";

const fixture: Narrative = {
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
}

@Component({
  selector: 'narrative',
  templateUrl: 'narrative.component.html',
  styleUrls: ['narrative.component.scss']
})
export class NarrativeComponent {
  @Input()
  narrative?: Narrative = fixture
}
