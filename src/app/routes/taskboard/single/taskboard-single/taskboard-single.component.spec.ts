import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskboardSingleComponent } from './taskboard-single.component';

describe('TaskboardSingleComponent', () => {
  let component: TaskboardSingleComponent;
  let fixture: ComponentFixture<TaskboardSingleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskboardSingleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskboardSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
