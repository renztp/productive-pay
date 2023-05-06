import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskListViewComponent } from './routes/task-list/task-list.view.component';
import { FundsSetupViewComponent } from './routes/funds-setup/funds-setup.view.component';
import { RootComponent } from './common/root/root.component';
import { MonitorViewComponent } from './routes/monitor/monitor.view.component';

const routes: Routes = [
  { path: '**', redirectTo: '' },
  {
    path: 'funds/setup',
    component: FundsSetupViewComponent,
    data: {
      showHeaderAndFooter: false,
    },
  },
  {
    path: '',
    component: RootComponent,
    children: [
      { path: '', component: TaskListViewComponent },
      { path: 'monitor', component: MonitorViewComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
