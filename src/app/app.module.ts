import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbCollapseModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TaskListViewComponent } from './routes/task-list/task-list.view.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import {  TaskSetupViewComponent } from './routes/task-setup/task-setup.view.component';
import { ContainerComponent } from './common/container/container.component';
import { ReactiveFormsModule } from '@angular/forms';
import { IconsModule } from './icons/icons.module';
import { RootComponent } from './common/root/root.component';
import { MonitorViewComponent } from './routes/monitor/monitor.view.component';
import { BasicSetupViewComponent } from './routes/basic-setup/basic-setup.view.component';
import { SidebarComponent } from './common/sidebar/sidebar.component';
import { TaskboardModule } from './routes/taskboard/taskboard.module';
import { SettingsViewComponent } from './routes/settings/settings.view.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskListViewComponent,
    HeaderComponent,
    FooterComponent,
    TaskSetupViewComponent,
    ContainerComponent,
    RootComponent,
    MonitorViewComponent,
    BasicSetupViewComponent,
    SidebarComponent,
    SettingsViewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    IconsModule,
    NgbCollapseModule,
    TaskboardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
