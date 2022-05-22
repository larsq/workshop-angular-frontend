import {Component, EventEmitter, OnDestroy} from "@angular/core";
import {Narrative} from "../../model/narrative";
import {SearchStoreService} from "../../services/search-store.service";
import {map, takeUntil, withLatestFrom} from "rxjs";

@Component({
  selector: 'narrative',
  templateUrl: 'narrative.component.html',
  styleUrls: ['narrative.component.scss']
})
export class NarrativeComponent implements OnDestroy {
  private readonly _destroyed$ = new EventEmitter<void>();
  narrative?: Narrative = undefined

  constructor(private store: SearchStoreService) {
    store.selectedNarrative$.pipe(
      withLatestFrom(this.store.matchingNarratives$),
      map(([selected, narratives]) => {
        if (selected === undefined || narratives.length === 0) {
          return undefined;
        }

        return narratives.find(narrative => narrative.title === selected);
      }),
      takeUntil(this._destroyed$)
    ).subscribe(narrative => {
      this.narrative = narrative;
    })
  }

  ngOnDestroy(): void {
    this._destroyed$.emit();
  }

}
