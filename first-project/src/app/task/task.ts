import { Component, input } from '@angular/core';
import { Indivtask } from '../indivtask/indivtask';
import { Taskform } from '../taskform/taskform';

@Component({
  selector: 'app-task',
  imports: [Indivtask, Taskform],
  templateUrl: './task.html',
  styleUrl: './task.css',
})
export class Task {
  username = input();
  userId = input<string>();
  taskFormToShow: boolean = false;
  buttonName: string = 'Add Task';
  tasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary:
        'Learn all the basic and advanced features of Angular & how to apply them.',
      dueDate: '2025-12-31',
    },
    {
      id: 't2',
      userId: 'u3',
      title: 'Build first prototype',
      summary: 'Build a first prototype of the online shop website',
      dueDate: '2024-05-31',
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Prepare issue template',
      summary:
        'Prepare and describe an issue template which will help with project management',
      dueDate: '2024-06-15',
    },
  ];

  get selectedUserTasks() {
    let userTasks = this.tasks.filter((task) => task.userId === this.userId());
    return userTasks;
  }

  onCompleteTask(task: any) {
    this.tasks = this.tasks.filter((indexTask) => task.id != indexTask.id);
  }

  showTaskForm() {
    this.taskFormToShow = true;
  }

  isTaskAddingCancelled() {
    this.taskFormToShow = false;
  }

  addTask(task: any) {

    task = { ...task, userId: this.userId() };
    this.tasks.unshift(task);
    this.taskFormToShow = false;
  }
}
