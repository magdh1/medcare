import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { AlertDatePage } from './alert-date.page';

describe('AlertDatePage', () => {
  let component: AlertDatePage;
  let fixture: ComponentFixture<AlertDatePage>;
  let adressePage: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlertDatePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(async () => {
    fixture = await TestBed.createComponent(AlertDatePage);
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
