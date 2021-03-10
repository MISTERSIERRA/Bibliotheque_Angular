import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorieMobileComponent } from './categorie-mobile.component';

describe('CategorieMobileComponent', () => {
  let component: CategorieMobileComponent;
  let fixture: ComponentFixture<CategorieMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategorieMobileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategorieMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
