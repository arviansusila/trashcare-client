import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PengaduanDetailPage } from './pengaduan-detail.page';

describe('PengaduanDetailPage', () => {
  let component: PengaduanDetailPage;
  let fixture: ComponentFixture<PengaduanDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PengaduanDetailPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PengaduanDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
