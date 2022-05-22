import {Component, Input} from "@angular/core";
import {Country} from "../../model/country";
import {DomSanitizer, SafeUrl} from "@angular/platform-browser";

@Component({
  selector: 'narrative-countries-element',
  templateUrl: 'narrative-countries-element.component.html',
  styleUrls: ['narrative-countries-element.component.scss']
})
export class NarrativeCountriesElementComponent {
  constructor(private sanitizer: DomSanitizer) {
  }

  @Input()
  country?: Country

  generateSafeUrl(): SafeUrl | undefined {
    if (this.country === undefined) {
      return undefined;
    }

    return this.sanitizer.bypassSecurityTrustUrl(`https://flagcdn.com/64x48/${this.country.countryCode}.png`)
  }
}
