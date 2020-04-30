import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextareaCompComponent } from './textarea-comp.component';

describe('TextareaCompComponent', () => {
  let component: TextareaCompComponent;
  let fixture: ComponentFixture<TextareaCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextareaCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextareaCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
