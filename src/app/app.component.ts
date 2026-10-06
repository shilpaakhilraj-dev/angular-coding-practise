import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'angular-coding-practice';
  public topics: {title: string, key: string}[] = [
    {title: 'simple search', key: 'simple-search'},
    {title: 'search using rxjs', key: 'rxjs-search'},
    {title: 'template driven forms', key: 'template-driven'},
    {title: 'reactive forms', key: 'reactive-form'},
    {title: 'javascript coding questions', key: 'js-coding'}
  ]

  public topicActive: string = 'simple-search';

  selectTopic(event: string) {
    this.topicActive=event;
  }

}
