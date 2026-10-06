import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JavascriptCodingQuestionsComponent } from './javascript-coding-questions.component';

describe('JavascriptCodingQuestionsComponent', () => {
  let component: JavascriptCodingQuestionsComponent;
  let fixture: ComponentFixture<JavascriptCodingQuestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JavascriptCodingQuestionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JavascriptCodingQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
