import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReportsPage } from './reports.page';
import { ReportsResolver } from './reports.resolver';

const routes: Routes = [
  {
    path: '',
    component: ReportsPage,
    resolve: {
      data: ReportsResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [
    ReportsResolver
  ]
})
export class ReportsPageRoutingModule {}
