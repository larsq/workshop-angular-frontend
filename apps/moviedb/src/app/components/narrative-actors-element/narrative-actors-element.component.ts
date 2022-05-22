import {Component, Input} from "@angular/core";
import {Actor} from "../../model/actor";

@Component({
  selector: 'narrative-actor-element',
  templateUrl: 'narrative-actors-element.component.html',
  styleUrls: ['narrative-actors-element.component.scss']
})
export class NarrativeActorsElementComponent {
  @Input()
  actor: Actor | undefined = undefined
}
