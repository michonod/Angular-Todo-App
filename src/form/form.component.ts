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
  @Output() submitTask = new EventEmitter<{ task: string }>();
  todoTask = '';

  onSubmit() {
    this.submitTask.emit({ task: this.todoTask });
    this.todoTask = '';
  }
}
