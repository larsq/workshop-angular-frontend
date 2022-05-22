import {Component, EventEmitter, HostListener, Input, Output} from "@angular/core";

@Component({
  selector: 'narrative-list-element',
  templateUrl: 'narrative-list-element.component.html',
  styleUrls: ['narrative-list-element.component.scss']
})
export class NarrativeListElementComponent {
  @Output()
  readonly elementSelected = new EventEmitter<string>();

  @Input()
  title?: string

  @Input()
  selected = false

  @HostListener('click')
  whenClicked(): void {
    if (!this.selected) {
      this.elementSelected.emit(this.title)
    }
  }
}
