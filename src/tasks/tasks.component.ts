import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-tasks',
  standalone: true,
  templateUrl: 'tasks.component.html',
  styleUrl: 'tasks.component.css',
  imports: [],
})
export class TasksComponent {
  @Input({ required: true }) tasks!: {
    key: string;
    task: string;
    completed: boolean;
  }[];
  @Output() remove = new EventEmitter<string>();
  @Output() mark = new EventEmitter<{ id: string; completed: boolean }>();
  removeTask(id: string) {
    this.remove.emit(id);
  }
  markTask(id: string, completed: boolean) {
    this.mark.emit({ id, completed });
  }
}
