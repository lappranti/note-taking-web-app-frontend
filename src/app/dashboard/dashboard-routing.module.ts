import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        loadComponent: () =>
          import('../dashboard/pages/home/home.component').then(
            (m) => m.HomeComponent
          ),
      },
      {
        path: 'archived',
        loadComponent: () =>
          import('../dashboard/pages/archived/archived.component').then(
            (m) => m.ArchivedComponent
          ),
      },
      {
        path: ':tags',
        loadComponent: () =>
          import('../dashboard/pages/tags/tags.component').then(
            (m) => m.TagsComponent
          ),
      },
      {
        path: 'settings',
        loadComponent: () =>
          import('../dashboard/pages/settings/settings.component').then(
            (m) => m.SettingsComponent
          ),
      },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
