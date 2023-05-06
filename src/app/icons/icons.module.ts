import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ChevronRight} from 'angular-feather/icons'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

const icons = {
  ChevronRight
}

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgbModule
  ],
  exports: [
    NgbModule
  ]
})
export class IconsModule { }
