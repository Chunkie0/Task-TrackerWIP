import { Component, OnInit } from '@angular/core';
import {TaskService} from '../task.service'
import {Tasks} from '../Task'

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: Tasks[] = [];

  constructor( private taskService: TaskService) { }

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((task) => this.tasks = task);
  }

  removeTask(task: Tasks) {
    this.taskService.removeTask(task).subscribe(() => this.tasks = this.tasks.filter(ts => ts.id !== task.id));
  }

  
  addTask(task: Tasks){
    this.taskService.addTask(task).subscribe((task) => this.tasks.push(task));
  }
}
