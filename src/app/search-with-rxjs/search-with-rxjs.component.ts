import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { debounceTime, delay, distinctUntilChanged, map, Observable, of, startWith, Subject, switchMap } from 'rxjs';

@Component({
  selector: 'app-search-with-rxjs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './search-with-rxjs.component.html',
  styleUrl: './search-with-rxjs.component.scss'
})
export class SearchWithRxjsComponent implements OnInit{

  private searchSubject = new Subject<string>();

  public data = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry', 'Fig', 'Grape'];

  public results$: Observable<string[]> = of(this.data);

  ngOnInit(): void {
    this.results$ = this.searchSubject.pipe(
      startWith(''),
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term) => this.search(term))
    );
  }

  onSearch(event: Event): void {
    const term = (event?.target as HTMLInputElement)?.value?.toLowerCase();
    this.searchSubject.next(term);
  }

  search(term: string): Observable<string[]> {
    return of(
      this.data?.filter((item) => item?.toLowerCase()?.includes(term))
    ).pipe(
      delay(100),
      map((results) => (results.length ? results : this.data))
    );
  }

}
