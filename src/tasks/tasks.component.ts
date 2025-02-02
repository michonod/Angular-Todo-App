import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tasks',
  standalone: true,
  templateUrl: 'tasks.component.html',
  styleUrl: 'tasks.component.css',
  imports: [],
})
export class TasksComponent {
  @Input({ required: true }) tasks!: { key: string; task: string }[];
}
