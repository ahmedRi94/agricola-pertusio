import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatteFormaggiComponent } from './latte-formaggi.component';

describe('LatteFormaggiComponent', () => {
  let component: LatteFormaggiComponent;
  let fixture: ComponentFixture<LatteFormaggiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LatteFormaggiComponent]
    });
    fixture = TestBed.createComponent(LatteFormaggiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
