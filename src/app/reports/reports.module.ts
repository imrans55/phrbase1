import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReportsPageRoutingModule } from './reports-routing.module';

import { ReportsPage } from './reports.page';
import { ReportsResolver } from './reports.resolver';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReportsPageRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [ReportsPage],
  providers: [
    ReportsResolver
  ],
  exports: [ReportsPage]
})
export class ReportsPageModule {}
