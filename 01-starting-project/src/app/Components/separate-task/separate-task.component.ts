import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { CardComponent } from '../shared/card/card.component';
import { DatePipe } from '@angular/common';
import { TaskServices } from '../task/task.service';

interface TASK {
  id: string;
  userId: string;
  title: string;
  summary: string;
  dueDate: string;
}
@Component({
  selector: 'app-separate-task',
  standalone: true,
  imports: [CardComponent, CardComponent, DatePipe],
  templateUrl: './separate-task.component.html',
  styleUrl: './separate-task.component.css',
})
export class SeparateTaskComponent {
  @Input() task!: TASK;

  private taskService = inject(TaskServices);
  onComplteTask() {
    this.taskService.removeTask(this.task.id);
  }
}
