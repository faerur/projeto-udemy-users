import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Header} from './components/header/header'
import { User } from "./components/user/user";
import { DUMMY_USERS } from './dummy-users';
import { UserTasks } from './components/user-task/user-tasks';

export interface user{
  id: string;
  name: string;
  avatar: string;
}

@Component({
  imports: [RouterOutlet, Header, User, UserTasks],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  users = DUMMY_USERS;
  selectedUserId = '';

  get selectedUser(){
    return this.users.find(user => user.id === this.selectedUserId)!;
  }

  selectUser(id: string){
    this.selectedUserId = id;
  }
  
  
}
