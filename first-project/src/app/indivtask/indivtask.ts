import { Component, input } from '@angular/core';
import { TaskService } from '../task/task.service';

interface Task {
  title?: string;
  dueDate?: string;
  summary?: string;
  id?: string;
  userId?: string;
}

@Component({
  selector: 'app-indivtask',
  templateUrl: './indivtask.html',
  styleUrl: './indivtask.css',
  standalone: false,
})
export class Indivtask {
  task = input.required<Task>();

  constructor(private taskService: TaskService) {}

  onCompleteTask() {
    this.taskService.removeTask(this.task()?.id!);
  }
}
