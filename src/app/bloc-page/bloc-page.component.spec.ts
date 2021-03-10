import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlocPageComponent } from './bloc-page.component';

describe('BlocPageComponent', () => {
  let component: BlocPageComponent;
  let fixture: ComponentFixture<BlocPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlocPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlocPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
