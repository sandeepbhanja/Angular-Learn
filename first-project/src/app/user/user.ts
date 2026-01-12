import { Component,signal, computed } from '@angular/core';
import { DUMMY_USERS } from '../../dummy-users';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {

  selectedUser = signal(DUMMY_USERS[this.getRandomIndex()])

  onClick(){
    this.selectedUser.set(DUMMY_USERS[this.getRandomIndex()])
  }

  get userImage(){
    return 'assets/users/'+this.selectedUser().avatar
  }

  getRandomIndex(){
    return Math.floor(Math.random() * DUMMY_USERS.length )
  }

}
