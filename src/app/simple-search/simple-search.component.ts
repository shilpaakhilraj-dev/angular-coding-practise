import { Component } from '@angular/core';

@Component({
  selector: 'app-simple-search',
  templateUrl: './simple-search.component.html',
  styleUrls: ['./simple-search.component.scss']
})
export class SimpleSearchComponent{

  public allData: string[] = ['angular', 'rxjs', 'html', 'css']

  public results: string[] = [];

  onTextChange(event: any) {
    const newValue = (event?.target as HTMLInputElement)?.value?.toLowerCase();
    if (newValue!=='') {
      this.results = this.allData?.filter((result: string) => result?.includes(newValue));
    } else {
      this.results = [];
    }
  }

}
