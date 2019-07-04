import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Child6aComponent } from './child6a.component';

describe('Child6aComponent', () => {
  let component: Child6aComponent;
  let fixture: ComponentFixture<Child6aComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Child6aComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Child6aComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
