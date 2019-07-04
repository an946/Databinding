import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Child6bComponent } from './child6b.component';

describe('Child6bComponent', () => {
  let component: Child6bComponent;
  let fixture: ComponentFixture<Child6bComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Child6bComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Child6bComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
