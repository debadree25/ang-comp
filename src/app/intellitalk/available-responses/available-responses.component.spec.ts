import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailableResponsesComponent } from './available-responses.component';

describe('AvailableResponsesComponent', () => {
  let component: AvailableResponsesComponent;
  let fixture: ComponentFixture<AvailableResponsesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvailableResponsesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvailableResponsesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
