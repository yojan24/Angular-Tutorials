import { NgModule } from '@angular/core';

import { TaskComponent } from './task.component';
import { SeparateTaskComponent } from '../separate-task/separate-task.component';
import { AddTaskComponent } from '../add-task/add-task.component';
import { SharedModule } from '../shared/shared.module';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [TaskComponent, SeparateTaskComponent, AddTaskComponent],
  exports: [TaskComponent],
  imports: [SharedModule, CommonModule, FormsModule],
})
export class TaskModule {}
