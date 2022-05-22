import {Component, Input} from "@angular/core";
import {Country} from "../../model/country";

@Component({
  selector: 'narrative-countries-element',
  templateUrl: 'narrative-countries-element.component.html',
  styleUrls: ['narrative-countries-element.component.scss']
})
export class NarrativeCountriesElementComponent {
  @Input()
  country?: Country
}
