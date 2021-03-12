import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailMeteoComponent } from './detail-meteo.component';

describe('DetailMeteoComponent', () => {
  let component: DetailMeteoComponent;
  let fixture: ComponentFixture<DetailMeteoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailMeteoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailMeteoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
