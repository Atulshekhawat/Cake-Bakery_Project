import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CakeRequestComponent } from './cake-request.component';

describe('CakeRequestComponent', () => {
  let component: CakeRequestComponent;
  let fixture: ComponentFixture<CakeRequestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CakeRequestComponent]
    });
    fixture = TestBed.createComponent(CakeRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
