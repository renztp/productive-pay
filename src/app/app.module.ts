import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TaskListViewComponent } from './routes/task-list/task-list.view.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import {  TaskSetupViewComponent } from './routes/task-setup/task-setup.view.component';
import { ContainerComponent } from './common/container/container.component';
import { ReactiveFormsModule } from '@angular/forms';
import { IconsModule } from './icons/icons.module';
import { RootComponent } from './common/root/root.component';
import { TaskboardViewComponent } from './routes/taskboard/taskboard.view.component';
import { MonitorViewComponent } from './routes/monitor/monitor.view.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskListViewComponent,
    HeaderComponent,
    FooterComponent,
    TaskSetupViewComponent,
    ContainerComponent,
    RootComponent,
    TaskboardViewComponent,
    MonitorViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    IconsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
