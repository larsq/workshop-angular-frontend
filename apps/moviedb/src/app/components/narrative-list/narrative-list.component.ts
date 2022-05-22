import {Component, EventEmitter, OnDestroy} from "@angular/core";
import {SearchStoreService} from "../../services/search-store.service";
import {combineLatestWith, takeUntil} from "rxjs";

@Component({
  selector: 'narrative-list',
  templateUrl: 'narrative-list.component.html',
  styleUrls: ['../../support/support.scss', 'narrative-list.component.scss']
})
export class NarrativeListComponent implements OnDestroy {
  private readonly _destroyed$ = new EventEmitter<void>();

  titles: string[] = []
  selectedTitle?: string = undefined
  overflow = false;

  constructor(private store: SearchStoreService) {
    store.matchingNarratives$.pipe(
      takeUntil(this._destroyed$)
    ).subscribe(narratives => {
      this.titles = narratives.map(narrative => narrative.title).slice(0, 25)
      this.overflow = narratives.length > this.titles.length

      if (this.titles.length === 0) {
        this.store.unselect();
      }

      if (this.titles.length === 1) {
        this.store.select(this.titles[0])
      }
    })

    store.selectedNarrative$.pipe(
      combineLatestWith(this.store.matchingNarratives$),
      takeUntil(this._destroyed$)
    ).subscribe(([selected, narratives]) => {
      this.selectedTitle = narratives.some(narrative => narrative.title === selected) ? selected : undefined;
    })
  }

  isSelected(title: string) {
    return title === this.selectedTitle;
  }

  selectTitle(title: string): void {
    if (this.titles.includes(title)) {
      this.store.select(title)
    }
  }

  ngOnDestroy() {
    this._destroyed$.emit()
  }
}
