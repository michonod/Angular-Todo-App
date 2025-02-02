import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-tasks',
  standalone: true,
  templateUrl: 'tasks.component.html',
  styleUrl: 'tasks.component.css',
  imports: [],
})
export class TasksComponent {
  @Input({ required: true }) tasks!: { key: string; task: string }[];
  @Output() remove = new EventEmitter<string>();
  removeTask(id: string) {
    this.remove.emit(id);
  }
}
