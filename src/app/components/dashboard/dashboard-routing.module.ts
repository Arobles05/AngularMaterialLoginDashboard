import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { BodyDashboardComponent } from './body-dashboard/body-dashboard.component';
import { UserComponent } from './user/user.component';
import { ReportComponent } from './report/report.component';

const routes: Routes = [
  {
    path: '', component: DashboardComponent, children: [
    {path:'', component:BodyDashboardComponent},
    {path:'usuarios', component:UserComponent},
    {path:'reportes', component:ReportComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
