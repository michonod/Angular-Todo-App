import { Component } from '@angular/core';

@Component({
  selector: 'app-tasks',
  standalone: true,
  templateUrl: 'tasks.component.html',
  styleUrl: 'tasks.component.css',
  imports: [],
})
export class TasksComponent {
  tasks = [
    { key: '1', task: 'Wash your dishes' },
    { key: '2', task: 'Go to do store and buy grocceries' },
  ];
}
