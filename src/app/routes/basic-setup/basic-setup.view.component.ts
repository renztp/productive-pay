import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-basic-setup.view',
  templateUrl: './basic-setup.view.component.html',
  styleUrls: ['./basic-setup.view.component.scss']
})
export class BasicSetupViewComponent {
  indentedContainer: boolean = true;
  profileName = new FormControl('profileName');
}
