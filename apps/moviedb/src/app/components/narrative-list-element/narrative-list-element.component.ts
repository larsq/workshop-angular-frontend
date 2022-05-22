import {Component, Input} from "@angular/core";

@Component({
  selector: 'narrative-list-element',
  templateUrl: 'narrative-list-element.component.html',
  styleUrls: ['narrative-list-element.component.scss']
})
export class NarrativeListElementComponent {
  @Input()
  title?: string

  @Input()
  selected = false
}
