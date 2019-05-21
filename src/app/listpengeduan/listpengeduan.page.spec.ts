import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListpengeduanPage } from './listpengeduan.page';

describe('ListpengeduanPage', () => {
  let component: ListpengeduanPage;
  let fixture: ComponentFixture<ListpengeduanPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListpengeduanPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListpengeduanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
