import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { DUMMY_USERS } from '../dummy-users';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  standalone:false
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
