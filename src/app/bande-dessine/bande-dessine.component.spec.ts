import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BandeDessineComponent } from './bande-dessine.component';

describe('BandeDessineComponent', () => {
  let component: BandeDessineComponent;
  let fixture: ComponentFixture<BandeDessineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BandeDessineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BandeDessineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
