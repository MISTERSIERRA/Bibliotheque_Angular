import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderMeteoComponent } from './header-meteo.component';

describe('HeaderMeteoComponent', () => {
  let component: HeaderMeteoComponent;
  let fixture: ComponentFixture<HeaderMeteoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderMeteoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderMeteoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
