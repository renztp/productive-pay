import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-funds-setup.view',
  templateUrl: './funds-setup.view.component.html',
  styleUrls: ['./funds-setup.view.component.scss']
})
export class FundsSetupViewComponent {
  indentedContainer: boolean = true;
  workItemLabel: string = 'Task';
  fundsSetupForm = new FormControl('Ticket');
}
