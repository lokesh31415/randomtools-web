import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandSelectComponent } from './rand-select.component';

describe('RandSelectComponent', () => {
  let component: RandSelectComponent;
  let fixture: ComponentFixture<RandSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RandSelectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RandSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
