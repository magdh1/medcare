import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { BenefitsPage } from './benefits.page';

describe('BenefitsPage', () => {
  let component: BenefitsPage;
  let fixture: ComponentFixture<BenefitsPage>;
  let benefitsPage: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BenefitsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(async () => {
    fixture = await TestBed.createComponent(BenefitsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a list of 10 elements', () => {
    benefitsPage = fixture.nativeElement;
    const items = benefitsPage.querySelectorAll('ion-item');
    expect(items.length).toEqual(10);
  });

});
