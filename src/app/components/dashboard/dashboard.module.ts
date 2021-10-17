import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './dashboard.component';
import { BodyDashboardComponent } from './body-dashboard/body-dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UserComponent } from './user/user.component';
import { ReportComponent } from './report/report.component';


@NgModule({
  declarations: [
    DashboardComponent,
    BodyDashboardComponent,
    NavbarComponent,
    UserComponent,
    ReportComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
  ]
})
export class DashboardModule { }
