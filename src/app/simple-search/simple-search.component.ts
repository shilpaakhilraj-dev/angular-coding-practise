import { Component } from '@angular/core';

@Component({
  selector: 'app-simple-search',
  templateUrl: './simple-search.component.html',
  styleUrls: ['./simple-search.component.scss']
})
export class SimpleSearchComponent{

  data: string[] = ['angular', 'rxjs', 'html', 'css']

  searchResults: string[] = [];

  onTextChange(event: any) {
    if (event) {
      console.log(event)
      this.searchResults = this.data?.filter((result: string) => result?.includes(event))
    } else {
      this.searchResults = [];
    }
  }

}
