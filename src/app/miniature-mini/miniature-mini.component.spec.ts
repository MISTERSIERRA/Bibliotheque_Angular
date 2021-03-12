import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniatureMiniComponent } from './miniature-mini.component';

describe('MiniatureMiniComponent', () => {
  let component: MiniatureMiniComponent;
  let fixture: ComponentFixture<MiniatureMiniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiniatureMiniComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiniatureMiniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
