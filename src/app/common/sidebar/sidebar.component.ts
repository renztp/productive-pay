import { Component } from '@angular/core';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  public isCollapsed = false;

  constructor() {}

  collapseToggle() {
    this.isCollapsed = !this.isCollapsed;
  }
}
