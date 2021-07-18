import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandUploadBoxComponent } from './rand-upload-box.component';

describe('RandUploadBoxComponent', () => {
  let component: RandUploadBoxComponent;
  let fixture: ComponentFixture<RandUploadBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RandUploadBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RandUploadBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
