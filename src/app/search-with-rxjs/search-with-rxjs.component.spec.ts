import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchWithRxjsComponent } from './search-with-rxjs.component';

describe('SearchWithRxjsComponent', () => {
  let component: SearchWithRxjsComponent;
  let fixture: ComponentFixture<SearchWithRxjsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchWithRxjsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SearchWithRxjsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
