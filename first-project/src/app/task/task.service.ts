import { Injectable } from "@angular/core";

interface Task {
  title?: string;
  dueDate?: string;
  summary?: string;
  id?: string;
  userId?: string;
}

@Injectable({providedIn:"root"})
export class TaskService {
  private tasks = [
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

  public getTask(userId : string) {
    return this.tasks.filter((task) => task.userId === userId);
  }

  public setTask(task:any,userId:string) {
    task = { ...task, userId: userId };
    this.tasks.unshift(task);
  }

  removeTask(id:string){
    this.tasks = this.tasks.filter((indexTask) => id != indexTask.id);
  }
}
