import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-task-setup.view',
  templateUrl: './task-setup.view.component.html',
  styleUrls: ['./task-setup.view.component.scss']
})
export class TaskSetupViewComponent {
  indentedContainer: boolean = true;
  workItemLabel: string = 'Task';
  taskSetupForm = new FormControl('Ticket');
}
