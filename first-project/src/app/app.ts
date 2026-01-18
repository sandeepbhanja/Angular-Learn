import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { DUMMY_USERS } from '../dummy-users';
import { Header } from './header/header';
import { Task } from './task/task';
import { User } from './user/user';

@Component({
  selector: 'app-root',
  imports: [Header, User, Task],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  users = DUMMY_USERS;

  selectedUser!: string;

  findUserNameById() {
    return this.users.find((user) => user.id === this.selectedUser);
  }

  onSelectUser(id: string) {
    this.selectedUser = id;
  }
}
