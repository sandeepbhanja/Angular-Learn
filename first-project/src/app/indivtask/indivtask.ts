import { DatePipe } from '@angular/common';
import { Component, input, output } from '@angular/core';
import { Card } from '../shared/card/card';
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
  imports: [Card, DatePipe],
  templateUrl: './indivtask.html',
  styleUrl: './indivtask.css',
})
export class Indivtask {
  task = input.required<Task>();

  constructor(private taskService: TaskService) {}

  onCompleteTask() {
    this.taskService.removeTask(this.task()?.id!)
  }
}
