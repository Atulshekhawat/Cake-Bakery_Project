import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CakeCartComponent } from './cake-cart.component';

describe('CakeCartComponent', () => {
  let component: CakeCartComponent;
  let fixture: ComponentFixture<CakeCartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CakeCartComponent]
    });
    fixture = TestBed.createComponent(CakeCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
