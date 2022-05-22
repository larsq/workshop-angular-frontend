import {Component, Input} from "@angular/core";
import {Narrative} from "../../model/narrative";

@Component({
  selector: 'narrative-list',
  templateUrl: 'narrative-list.component.html',
  styleUrls: ['../../support/support.scss', 'narrative-list.component.scss']
})
export class NarrativeListComponent {
  @Input()
  titles: string[] = []

  @Input()
  selectedTitle?: string
}
