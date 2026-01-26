import { Component, inject, input, output, signal } from '@angular/core';
import { TaskService } from '../task/task.service';

interface TaskInterface {
  id?: string;
  title?: string;
  summary?: string;
  dueDate?: string;
}

@Component({
  selector: 'app-taskform',
  templateUrl: './taskform.html',
  styleUrl: './taskform.css',
  standalone: false,
})
export class Taskform {
  cancel = output();
  newTask = output<TaskInterface>();
  enteredTitle = signal('');
  enteredSummary = signal('');
  enteredDueDate = signal('');
  userId = input.required<string>();

  private taskService = inject(TaskService);

  onSubmit() {
    let task: TaskInterface = {
      id: crypto.randomUUID(),
      title: this.enteredTitle(),
      summary: this.enteredSummary(),
      dueDate: this.enteredDueDate(),
    };
    this.newTask.emit(task);

    this.taskService.setTask(task, this.userId());
  }

  onCancel() {
    this.cancel.emit();
  }
}
