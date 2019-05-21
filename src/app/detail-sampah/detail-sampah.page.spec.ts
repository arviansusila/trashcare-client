import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailSampahPage } from './detail-sampah.page';

describe('DetailSampahPage', () => {
  let component: DetailSampahPage;
  let fixture: ComponentFixture<DetailSampahPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailSampahPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailSampahPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
