import { inject, Injectable, signal } from '@angular/core';
import { single } from 'rxjs';
import { Task, TaskStatus } from './task.model';
import { LogsService } from '../logs.service';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  private tasks = signal<Task[]>([]);
  private logService = inject(LogsService);
  allTasks = this.tasks.asReadonly();

  addTask(taskData: { title: string; description: string }) {
    const newTask: Task = {
      ...taskData,
      id: Math.random().toString(),
      status: 'OPEN',
    };
    this.tasks.update((old) => [...old, newTask]);
    this.logService.log(`Add new Task ${newTask.title}`);
  }

  updateTaskStatus(taskId: string, newStatus: TaskStatus) {
    console.log(taskId, newStatus);
    this.tasks.update((old) =>
      old.map((task) => {
        if (task.id === taskId) {
          return { ...task, status: newStatus };
        }
        return task;
      })
    );

    this.logService.log(`update Task Id:  ${taskId}`);
  }
}
