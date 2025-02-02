import { Component } from '@angular/core';
import { FormComponent } from '../form/form.component';
import { TasksComponent } from '../tasks/tasks.component';

interface Tasks {
  key: string;
  task: string;
  completed: boolean;
}
@Component({
  selector: 'app-root',
  imports: [FormComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  allTasks: { key: string; task: string; completed: boolean }[] = [];
  ngOnInit() {
    const storageTasks = localStorage.getItem('tasks');
    if (storageTasks) {
      this.allTasks = JSON.parse(storageTasks);
    }
  }

  saveToLocalStorage(allTasks: Tasks[]) {
    localStorage.setItem('tasks', JSON.stringify(allTasks));
  }
  addTask(singleTask: { task: string }) {
    this.allTasks = [
      ...this.allTasks,
      {
        key: String(this.allTasks.length + 1),
        ...singleTask,
        completed: false,
      },
    ];
    this.saveToLocalStorage(this.allTasks);
  }
  removeTask(id: string) {
    this.allTasks = this.allTasks.filter((task) => task.key !== id);
    this.saveToLocalStorage(this.allTasks);
  }
  markTask(id: string, completed: boolean) {
    const completedTask = this.allTasks.find((task) => task.key === id);
    if (!completedTask) return;

    const otherTasks = this.allTasks.filter((task) => task.key !== id);
    this.allTasks = [
      ...otherTasks,
      { ...completedTask, completed: completed },
    ].sort((a, b) => Number(a.key) - Number(b.key));
    this.saveToLocalStorage(this.allTasks);
  }
  clearStorage() {
    localStorage.setItem('tasks', '');
    this.allTasks = [];
  }
}
