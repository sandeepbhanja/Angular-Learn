import { Component, EventEmitter, Input, Output } from '@angular/core';

// type UserType = {
//   id: string,
//   name :string,
//   avatar:string
// }

interface UserType {
  id: string;
  name: string;
  avatar: string;
}

@Component({
  selector: 'app-user',
  templateUrl: './user.html',
  styleUrl: './user.css',
  standalone:false
})
export class User {
  @Input({ required: true }) user!: UserType;
  @Input({ required: true }) selected!: boolean;
  @Output() select = new EventEmitter<string>();

  // avatar = input.required<string>();
  // name = input.required<string>();
  // output = output<string>();

  get userImage() {
    return '/assets/users/' + this.user.avatar;
  }

  onSelectedUser() {
    this.select.emit(this.user.id);
  }
}
