import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskServices } from '../task/task.service';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css',
})
export class AddTaskComponent {
  @Input({ required: true }) userId!: string;
  @Output() cancel = new EventEmitter<void>();
  atitle = '';
  asummary = '';
  adueDate = '';

  private taskService = inject(TaskServices);
  onClose() {
    this.cancel.emit();
  }
  onSubmit() {
    this.taskService.addTask(
      {
        title: this.atitle,
        summary: this.asummary,
        dueDate: this.adueDate,
      },
      this.userId
    );
  }
}
