import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskboardViewComponent } from './taskboard.view.component';

describe('TaskboardViewComponent', () => {
  let component: TaskboardViewComponent;
  let fixture: ComponentFixture<TaskboardViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskboardViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskboardViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
