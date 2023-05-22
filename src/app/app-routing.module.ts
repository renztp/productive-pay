import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskSetupViewComponent } from './routes/task-setup/task-setup.view.component';
import { RootComponent } from './common/root/root.component';
import { MonitorViewComponent } from './routes/monitor/monitor.view.component';
import { BasicSetupViewComponent } from './routes/basic-setup/basic-setup.view.component';
import { TaskboardViewComponent } from './routes/taskboard/taskboard.view.component';
import { TaskboardSingleComponent } from './routes/taskboard/single/taskboard-single/taskboard-single.component';
import { SettingsViewComponent } from './routes/settings/settings.view.component';

const routes: Routes = [
  {
    path: '',
    component: RootComponent,
    children: [
      {
        path: 'taskboard',
        component: TaskboardViewComponent,
      },
      {
        path: 'taskboard/:id',
        component: TaskboardSingleComponent,
      },
      { path: 'monitor', component: MonitorViewComponent },
      { path: 'settings', component: SettingsViewComponent },
    ],
  },
  {
    path: 'setup/profile',
    component: BasicSetupViewComponent,
    data: {
      showHeaderAndFooter: false,
    },
  },
  {
    path: 'setup/project',
    component: TaskSetupViewComponent,
    data: {
      showHeaderAndFooter: false,
    },
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
