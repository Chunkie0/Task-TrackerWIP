import { Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import { Tasks } from '../Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-items',
  templateUrl: './task-items.component.html',
  styleUrls: ['./task-items.component.css']
})
export class TaskItemsComponent implements OnInit {
  @Input() task: Tasks;
  @Output() onClickRemoveTask: EventEmitter<Tasks> = new EventEmitter();
  faTimes = faTimes;

  constructor() { 
  }

  ngOnInit(): void {
  }

  onClickRemove(task){
    this.onClickRemoveTask.emit(task)
  }
}
