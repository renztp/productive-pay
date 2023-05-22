import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskboardSingleComponent } from './single/taskboard-single/taskboard-single.component';
import { TaskboardViewComponent } from './taskboard.view.component';
import { NewTaskboardComponent } from './components/new-taskboard/new-taskboard.component';



@NgModule({
  declarations: [
    TaskboardSingleComponent,
    TaskboardViewComponent,
    NewTaskboardComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    TaskboardSingleComponent,
    TaskboardViewComponent,
    NewTaskboardComponent
  ]
})
export class TaskboardModule { }
