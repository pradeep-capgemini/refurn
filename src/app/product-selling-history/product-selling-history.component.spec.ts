import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductSellingHistoryComponent } from './product-selling-history.component';

describe('ProductSellingHistoryComponent', () => {
  let component: ProductSellingHistoryComponent;
  let fixture: ComponentFixture<ProductSellingHistoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductSellingHistoryComponent]
    });
    fixture = TestBed.createComponent(ProductSellingHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
