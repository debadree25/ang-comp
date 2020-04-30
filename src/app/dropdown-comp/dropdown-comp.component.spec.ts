import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownCompComponent } from './dropdown-comp.component';

describe('DropdownCompComponent', () => {
  let component: DropdownCompComponent;
  let fixture: ComponentFixture<DropdownCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DropdownCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
