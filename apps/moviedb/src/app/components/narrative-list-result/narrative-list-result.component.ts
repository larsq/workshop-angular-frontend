import {Component, Input} from "@angular/core";

@Component({
  selector: 'narrative-list-result',
  templateUrl: 'narrative-list-result.component.html',
  styleUrls: ['narrative-list-result.component.scss']
})
export class NarrativeListResultComponent {
  @Input()
  matches = 0

  @Input()
  overflowSize = false;
}
