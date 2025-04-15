import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DashboardComponent } from './dashboard.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DashboardComponent,
    DashboardRoutingModule,
    NavbarComponent,
  ],
})
export class DashboardModule {}
