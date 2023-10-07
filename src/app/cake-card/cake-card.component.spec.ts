import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CakeCardComponent } from './cake-card.component';

describe('CakeCardComponent', () => {
  let component: CakeCardComponent;
  let fixture: ComponentFixture<CakeCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CakeCardComponent]
    });
    fixture = TestBed.createComponent(CakeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
