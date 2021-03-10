import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorieMoblieComponent } from './categorie-moblie.component';

describe('CategorieMoblieComponent', () => {
  let component: CategorieMoblieComponent;
  let fixture: ComponentFixture<CategorieMoblieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategorieMoblieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategorieMoblieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
