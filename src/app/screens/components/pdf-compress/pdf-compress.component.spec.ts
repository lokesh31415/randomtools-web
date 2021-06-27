import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfCompressComponent } from './pdf-compress.component';

describe('PdfCompressComponent', () => {
  let component: PdfCompressComponent;
  let fixture: ComponentFixture<PdfCompressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PdfCompressComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PdfCompressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
