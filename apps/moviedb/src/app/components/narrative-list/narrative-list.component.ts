import {Component, Input} from "@angular/core";

@Component({
  selector: 'narrative-list',
  templateUrl: 'narrative-list.component.html',
  styleUrls: ['../../support/support.scss', 'narrative-list.component.scss']
})
export class NarrativeListComponent {
  @Input()
  titles: string[] = []

  @Input()
  selectedTitle?: string = undefined

  isSelected(title: string) {
    return title === this.selectedTitle;
  }

  selectTitle(title: string): void {
    if (this.titles.includes(title)) {
      this.selectedTitle = title;
    }
  }
}
