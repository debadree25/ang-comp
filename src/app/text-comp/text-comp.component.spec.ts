import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextCompComponent } from './text-comp.component';

describe('TextCompComponent', () => {
  let component: TextCompComponent;
  let fixture: ComponentFixture<TextCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
