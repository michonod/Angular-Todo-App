import { Component } from '@angular/core';
import { FormComponent } from '../form/form.component';
import { TasksComponent } from '../tasks/tasks.component';

@Component({
  selector: 'app-root',
  imports: [FormComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  allTasks = [
    { key: '1', task: 'Wash your dishes' },
    { key: '2', task: 'Go to do store and buy grocceries' },
  ];
  addTask = (singleTask: {key: string, task: string}) => {
    this.allTasks = [...this.allTasks, singleTask]
  }
}
