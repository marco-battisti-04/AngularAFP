import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSelectionItemComponent } from './home-selection-item.component';

describe('HomeSelectionItemComponent', () => {
  let component: HomeSelectionItemComponent;
  let fixture: ComponentFixture<HomeSelectionItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeSelectionItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeSelectionItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
