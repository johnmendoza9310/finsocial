import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierTermsComponent } from './supplier-terms.component';

describe('SupplierTermsComponent', () => {
  let component: SupplierTermsComponent;
  let fixture: ComponentFixture<SupplierTermsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupplierTermsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplierTermsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
