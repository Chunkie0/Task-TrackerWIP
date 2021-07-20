import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import {Tasks} from '../Task'

@Component({
  selector: 'app-add-tasks',
  templateUrl: './add-tasks.component.html',
  styleUrls: ['./add-tasks.component.css']
})
export class AddTasksComponent implements OnInit {
  @Output() onAddTask: EventEmitter<Tasks> = new EventEmitter();
  text: string;
  day: string;
  time_remaining: string;
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    if(!this.text) {
      alert('Please add a task!');
      return
    }


    const newTask = {
      text: this.text,
      day: this.day,
      time_remaining: this.time_remaining
    }

    this.onAddTask.emit(newTask)

    this.text = "";
    this.day = "";
    this.time_remaining = "";
  }
}
