import {Component, Input} from "@angular/core";
import {Narrative} from "../../model/narrative";

@Component({
  selector: 'narrative',
  templateUrl: 'narrative.component.html',
  styleUrls: ['narrative.component.scss']
})
export class NarrativeComponent {
  @Input()
  narrative?: Narrative = undefined
}
