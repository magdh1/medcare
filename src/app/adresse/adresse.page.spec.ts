import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { AdressePage } from './adresse.page';

describe('AdressePage', () => {
  let component: AdressePage;
  let fixture: ComponentFixture<AdressePage>;
  let adressePage: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdressePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(async () => {
    fixture = await TestBed.createComponent(AdressePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a list of 10 elements', () => {
    adressePage = fixture.nativeElement;
    const items = adressePage.querySelectorAll('ion-item');
    expect(items.length).toEqual(10);
  });

});
