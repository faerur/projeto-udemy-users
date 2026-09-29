import { Component, Input } from '@angular/core';
import { Task } from '../../tasks/task/task';
@Component({
  imports: [Task],
  selector: 'app-user-tasks',
  styleUrl: './user-tasks.css',
  templateUrl: './user-tasks.html',
})
export class UserTasks {
  @Input({ required: true }) name?: string;
  @Input({ required: true }) userId?: string;
  tasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary: 'Learn all the basic and advanced features of Angular & how to apply them.',
      dueDate: '2025-12-31',
    },
  ];
}
