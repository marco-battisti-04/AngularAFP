import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBarItemComponent } from './search-bar-item.component';

describe('SearchBarItemComponent', () => {
  let component: SearchBarItemComponent;
  let fixture: ComponentFixture<SearchBarItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchBarItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchBarItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
