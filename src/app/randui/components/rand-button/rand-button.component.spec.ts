import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandButtonComponent } from './rand-button.component';

describe('RandButtonComponent', () => {
  let component: RandButtonComponent;
  let fixture: ComponentFixture<RandButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RandButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RandButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
