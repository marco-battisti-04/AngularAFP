import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecomendedHomeItemComponent } from './recomended-home-item.component';

describe('RecomendedHomeItemComponent', () => {
  let component: RecomendedHomeItemComponent;
  let fixture: ComponentFixture<RecomendedHomeItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecomendedHomeItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecomendedHomeItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
