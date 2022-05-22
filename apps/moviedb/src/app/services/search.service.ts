import {Injectable} from "@angular/core";
import {map, Observable, take, timeout} from "rxjs";
import {Narrative} from "../model/narrative";
import {HttpClient} from "@angular/common/http";
import {convert, NarrativeModel} from "../model/narrative-model";


@Injectable({
  providedIn: 'root'
})
export class SearchService {
  constructor(private http: HttpClient) {
  }


  search(query: string): Observable<Narrative[]> {
    return this.http.post<{ items: NarrativeModel[] }>(
      'http://localhost:8080',
      {part: query},
      {
        headers: {
          'Content-Type': ['application/json']
        }
      }).pipe(
      timeout(2000),
      map(res => res.items.map(model => convert(model))),
      take(1)
    )
  }
}
