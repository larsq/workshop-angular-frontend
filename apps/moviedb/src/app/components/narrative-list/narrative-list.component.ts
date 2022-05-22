import {Component, Input} from "@angular/core";

const fixture = [
  'Fun with Dick & Jane',
  'The Mitchells vs. The Machines'
]

const fixturedSelectedTitle = 'Fun with Dick & Jane'

@Component({
  selector: 'narrative-list',
  templateUrl: 'narrative-list.component.html',
  styleUrls: ['../../support/support.scss', 'narrative-list.component.scss']
})
export class NarrativeListComponent {
  @Input()
  titles: string[] = fixture

  @Input()
  selectedTitle?: string = fixturedSelectedTitle

  isSelected(title: string) {
    return title === this.selectedTitle;
  }

  selectTitle(title: string): void {
    if (this.titles.includes(title)) {
      this.selectedTitle = title;
    }
  }
}
