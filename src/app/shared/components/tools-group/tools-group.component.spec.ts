import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolsGroupComponent } from './tools-group.component';

describe('ToolsGroupComponent', () => {
  let component: ToolsGroupComponent;
  let fixture: ComponentFixture<ToolsGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToolsGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolsGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
