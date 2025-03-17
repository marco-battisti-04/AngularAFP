import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditspageComponent } from './creditspage.component';

describe('CreditspageComponent', () => {
  let component: CreditspageComponent;
  let fixture: ComponentFixture<CreditspageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreditspageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreditspageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
