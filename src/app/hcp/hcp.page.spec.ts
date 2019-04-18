import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { HcpPage } from './hcp.page';

describe('HcpPage', () => {
  let component: HcpPage;
  let fixture: ComponentFixture<HcpPage>;
  let hcpPage: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HcpPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(async () => {
    fixture = await TestBed.createComponent(HcpPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a list of 10 elements', () => {
    hcpPage = fixture.nativeElement;
    const items = hcpPage.querySelectorAll('ion-item');
    expect(items.length).toEqual(10);
  });

});
