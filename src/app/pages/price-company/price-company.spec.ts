import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceCompanyComponent } from './price-company.component';

describe('PriceCompanyComponent', () => {
  let component: PriceCompanyComponent;
  let fixture: ComponentFixture<PriceCompanyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PriceCompanyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PriceCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

});
