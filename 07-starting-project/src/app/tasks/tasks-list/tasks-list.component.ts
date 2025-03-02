import { Component, computed, inject, signal } from '@angular/core';

import { TaskItemComponent } from './task-item/task-item.component';
import { TasksService } from '../tasks.service';
import { TASK_STATUS_OPTOINS, taskStatusOption } from '../task.model';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-tasks-list',
  standalone: true,
  templateUrl: './tasks-list.component.html',
  styleUrl: './tasks-list.component.css',
  imports: [TaskItemComponent],
  providers: [
    {
      provide: TASK_STATUS_OPTOINS,
      useValue: taskStatusOption,
    },
  ],
})
export class TasksListComponent {
  selectedFilter = signal<string>('all');

  private tservice = inject(TasksService);

  taskOptions = inject(TASK_STATUS_OPTOINS);

  tasks = computed(() => {
    switch (this.selectedFilter()) {
      case 'open':
        return this.tservice
          .allTasks()
          .filter((task) => task.status === 'OPEN');
      case 'in-progress':
        return this.tservice
          .allTasks()
          .filter((task) => task.status === 'IN_PROGRESS');
      case 'done':
        return this.tservice
          .allTasks()
          .filter((task) => task.status === 'DONE');
      default:
        return this.tservice.allTasks();
    }
  });

  onChangeTasksFilter(filter: string) {
    this.selectedFilter.set(filter);
  }
}
