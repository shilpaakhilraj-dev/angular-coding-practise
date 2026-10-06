import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SimpleSearchComponent } from './simple-search/simple-search.component';
import { SearchWithRxjsComponent } from './search-with-rxjs/search-with-rxjs.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { JavascriptCodingQuestionsComponent } from './javascript-coding-questions/javascript-coding-questions.component';
import { FirstLetterUppercasePipe } from './pipes/first-letter-uppercase.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SimpleSearchComponent,
    FirstLetterUppercasePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SearchWithRxjsComponent,
    TemplateDrivenFormComponent,
    ReactiveFormComponent,
    JavascriptCodingQuestionsComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
