import {Component, Input} from "@angular/core";
import {Country} from "../../model/country";

@Component({
  selector: 'narrative-countries',
  templateUrl: 'narrative-countries.component.html',
  styleUrls: ['narrative-countries.component.scss']
})
export class NarrativeCountriesComponent {
  @Input()
  countries: Country[] = []
}
