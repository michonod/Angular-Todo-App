import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
  imports: [FormsModule],
})
export class FormComponent {
  @Output() submitTask = new EventEmitter<{ key: string; task: string }>();
  todoTask = '';
  generateUniqueId() {
    return Date.now().toString(36) + Math.random().toString(36);
  }
  onSubmit() {
    this.submitTask.emit({ key: this.generateUniqueId(), task: this.todoTask });
    this.todoTask = '';
  }
}
