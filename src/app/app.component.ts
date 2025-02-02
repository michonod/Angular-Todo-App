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
    { key: '1', task: 'Wash your dishes', completed: false },
    { key: '2', task: 'Go to do store and buy grocceries', completed: false },
  ];
  addTask(singleTask: { key: string; task: string }) {
    this.allTasks = [...this.allTasks, { ...singleTask, completed: false }];
  }
  removeTask(id: string) {
    this.allTasks = this.allTasks.filter((task) => task.key !== id);
  }
  markTask(id: string, completed: boolean) {
    const completedTask = this.allTasks.find((task) => task.key === id);
    if (!completedTask) return;

    const otherTasks = this.allTasks.filter((task) => task.key !== id);
    this.allTasks = [
      ...otherTasks,
      { ...completedTask, completed: completed },
    ].sort((a, b) => Number(b.key) - Number(a.key));
    console.log(this.allTasks);
  }
}
