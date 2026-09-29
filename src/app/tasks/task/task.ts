import { Component, Input} from '@angular/core';

interface TaskInt{
  id: string;
  title: string;
  summary: string;
  dueDate: string
}

@Component({
  imports: [],
  selector: 'app-task',
  styleUrl: './task.css',
  templateUrl: './task.html',
})

export class Task {
  @Input({ required: true }) task?: TaskInt;
}

