import { Component, input, output } from '@angular/core';

interface Task {
  title?: string;
  dueDate?: string;
  summary?: string;
  id?: string,
  userId?: string
}

@Component({
  selector: 'app-indivtask',
  imports: [],
  templateUrl: './indivtask.html',
  styleUrl: './indivtask.css',
})
export class Indivtask {
  task = input<Task>();
  complete = output<Task>();

  onCompleteTask(){
    this.complete.emit(this.task()!);
  }
}
