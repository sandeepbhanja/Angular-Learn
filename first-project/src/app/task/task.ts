import { Component, input } from '@angular/core';
import { TaskService } from './task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.html',
  styleUrl: './task.css',
  standalone: false,
})
export class Task {
  username = input();
  userId = input.required<string>();
  taskFormToShow: boolean = false;
  buttonName: string = 'Add Task';

  constructor(private taskService: TaskService) {}

  get selectedUserTasks() {
    return this.taskService.getTask(this.userId()!);
  }

  showTaskForm() {
    this.taskFormToShow = true;
  }

  isTaskAddingCancelled() {
    this.taskFormToShow = false;
  }

  addTask(task: any) {
    this.taskFormToShow = false;
  }
}
