import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowclassPage } from './showclass.page';

describe('ShowclassPage', () => {
  let component: ShowclassPage;
  let fixture: ComponentFixture<ShowclassPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ShowclassPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowclassPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
