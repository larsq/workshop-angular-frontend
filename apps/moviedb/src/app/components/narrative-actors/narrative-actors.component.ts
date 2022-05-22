import {Component, Input} from "@angular/core";
import {Actor} from "../../model/actor";

@Component({
  selector: 'narrative-actors',
  templateUrl: 'narrative-actors.component.html',
  styleUrls: ['narrative-actors.component.scss']
})
export class NarrativeActorsComponent {
  @Input()
  actors: Actor[] = []
}
