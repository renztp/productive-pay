import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskListViewComponent } from './routes/task-list/task-list.view.component';
import { TaskSetupViewComponent } from './routes/task-setup/task-setup.view.component';
import { RootComponent } from './common/root/root.component';
import { MonitorViewComponent } from './routes/monitor/monitor.view.component';

const routes: Routes = [
  {
    path: '',
    component: RootComponent,
    children: [
      { path: '', component: TaskListViewComponent },
      { path: 'monitor', component: MonitorViewComponent },
    ],
  },
  {
    path: 'setup',
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
