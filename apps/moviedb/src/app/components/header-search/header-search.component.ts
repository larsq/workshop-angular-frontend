import {Component} from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {SearchStoreService} from "../../services/search-store.service";

@Component({
  selector: 'header-search',
  templateUrl: 'header-search.component.html',
  styleUrls: ['header-search.component.scss']
})
export class HeaderSearchComponent {
  readonly form: FormGroup = new FormGroup({
    search: new FormControl('', [Validators.minLength(3)])
  });

  constructor(private store: SearchStoreService) {
  }

  onSubmit() {
    if (this.form.get('search')?.valid) {
      const query = this.form.get('search')?.value;
      this.store.search(query);
    }
  }
}
