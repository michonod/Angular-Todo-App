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
  @Output() submit = new EventEmitter<string>();
  todoTask = '';
  onSubmit() {
    console.log(this.todoTask);
    this.submit.emit(this.todoTask);
    console.log('SUBMIT');
  }
}
