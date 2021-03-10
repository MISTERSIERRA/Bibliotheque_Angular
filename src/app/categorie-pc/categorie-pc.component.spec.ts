import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriePcComponent } from './categorie-pc.component';

describe('CategoriePcComponent', () => {
  let component: CategoriePcComponent;
  let fixture: ComponentFixture<CategoriePcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoriePcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriePcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
