import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Indivtask } from '../indivtask/indivtask';
import { SharedModule } from '../shared/shared.module';
import { Taskform } from '../taskform/taskform';
import { Task } from './task';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [Task, Indivtask, Taskform],
  exports: [Task],
  imports: [CommonModule, SharedModule,FormsModule],
})
export class TaskModule {}
