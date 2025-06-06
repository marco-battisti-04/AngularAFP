import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderItemComponent } from './header-item.component';

describe('HeaderItemComponent', () => {
  let component: HeaderItemComponent;
  let fixture: ComponentFixture<HeaderItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
