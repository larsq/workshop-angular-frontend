import {Component} from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'header-search',
  templateUrl: 'header-search.component.html',
  styleUrls: ['header-search.component.scss']
})
export class HeaderSearchComponent {
  readonly form: FormGroup = new FormGroup({
    search: new FormControl('', [Validators.minLength(3)])
  });

  onSubmit() {
    console.log('search for ', this.form.get('search')?.value)
  }
}
