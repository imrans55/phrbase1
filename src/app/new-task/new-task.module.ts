import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewTaskPageRoutingModule } from './new-task-routing.module';

import { NewTaskPage } from './new-task.page';
import { ReactiveFormsModule } from '@angular/forms'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewTaskPageRoutingModule,
    ReactiveFormsModule
  ],
  providers: [Location],
  declarations: [NewTaskPage]
})
export class NewTaskPageModule {}
