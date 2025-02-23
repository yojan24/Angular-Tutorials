import { Component, Output } from '@angular/core';
import { HeaderComponent } from './Components/header/header.component';
import { UserComponent } from './Components/user/user.component';
import { DUMMY_USERS } from './dummy-users';
import { TaskComponent } from './Components/task/task.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = DUMMY_USERS;
  selectedUser = '';

  get sendData() {
    return this.users.find((user) => user.id === this.selectedUser);
  }
  onSelect(Id: string) {
    this.selectedUser = Id;
    console.log(this.selectedUser);
  }
}
