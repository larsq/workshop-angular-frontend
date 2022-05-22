import {EventEmitter, Injectable, OnDestroy} from "@angular/core";
import {BehaviorSubject, Observable, share, takeUntil, tap} from "rxjs";
import {Narrative} from "../model/narrative";
import {SearchService} from "./search.service";

@Injectable({
  providedIn: 'root'
})
export class SearchStoreService implements OnDestroy {
  private readonly _destroyed$ = new EventEmitter<void>();
  private readonly _selectedNarrative$ = new BehaviorSubject<string | undefined>(undefined);
  private readonly _matchingNarratives$ = new BehaviorSubject<Narrative[]>([]);

  readonly selectedNarrative$: Observable<string | undefined> = this._selectedNarrative$.pipe(
    share(),
    takeUntil(this._destroyed$)
  )

  readonly matchingNarratives$: Observable<Narrative[]> = this._matchingNarratives$.pipe(
    share(),
    takeUntil(this._destroyed$)
  )

  constructor(private searchService: SearchService) {
  }

  search(query: string): void {
    this.searchService.search(query).pipe(
      tap((narratives) => {
        this._matchingNarratives$.next(narratives)
      })
    ).subscribe(() => {
      // explicit empty
    })
  }

  select(title: string): void {
    this._selectedNarrative$.next(title)
  }

  unselect() {
    this._selectedNarrative$.next(undefined);
  }

  ngOnDestroy(): void {
    this._destroyed$.emit()
  }


}
