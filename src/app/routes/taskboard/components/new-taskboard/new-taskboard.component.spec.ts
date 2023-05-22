import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTaskboardComponent } from './new-taskboard.component';

describe('NewTaskboardComponent', () => {
  let component: NewTaskboardComponent;
  let fixture: ComponentFixture<NewTaskboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewTaskboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewTaskboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
