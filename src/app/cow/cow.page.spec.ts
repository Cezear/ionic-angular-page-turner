import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CowPage } from './cow.page';

describe('CowPage', () => {
  let component: CowPage;
  let fixture: ComponentFixture<CowPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CowPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CowPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
