import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmlibrarypageComponent } from './filmlibrarypage.component';

describe('FilmlibrarypageComponent', () => {
  let component: FilmlibrarypageComponent;
  let fixture: ComponentFixture<FilmlibrarypageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilmlibrarypageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilmlibrarypageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
