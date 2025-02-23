import { Component, Input } from '@angular/core';
import { SeparateTaskComponent } from '../separate-task/separate-task.component';
import { AddTaskComponent } from '../add-task/add-task.component';
import { TaskServices } from './task.service';
interface USER {
  id: string;
  name: string;
  avatar: string;
}
@Component({
  selector: 'app-task',
  standalone: true,
  imports: [SeparateTaskComponent, AddTaskComponent],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  @Input({ required: true }) userId!: string;
  @Input({ required: true }) user?: USER;
  selectedUserId: string = '';
  isVisible = false;
  private tasks: TaskServices;
  constructor(taskService: TaskServices) {
    this.tasks = taskService;
  }
  get selectedUserTask() {
    return this.tasks.getUserTask(this.userId);
  }

  ondeleteTask(id: string) {
    this.tasks.removeTask(id);
  }
  setVisible() {
    this.isVisible = !this.isVisible;
  }
}
