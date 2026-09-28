import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Header} from './components/header/header'
import { User } from "./components/user/user";
import { DUMMY_USERS } from './dummy-users';
import { UserTask } from "./components/user-task/user-task";

export interface user{
  id: string;
  name: string;
  avatar: string;
}

@Component({
  imports: [RouterOutlet, Header, User, UserTask],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  users = DUMMY_USERS;
  selectUser(id: string){
    console.log(id);
  }
}
