import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http"
import {Observable} from 'rxjs';
import {Tasks} from './Task'

const httpOptions = {headers: new HttpHeaders({'Content-Type':'application/json'})}

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private url = 'http://localhost:3000/tasks'

  constructor(private http:HttpClient) { }
  
  getTasks(): Observable<Tasks[]> {
    return this.http.get<Tasks[]>(this.url)
  }

  removeTask(task: Tasks): Observable<Tasks> {
    const urlTaskId = `${this.url}/${task.id}`;
    return this.http.delete<Tasks>(urlTaskId);
  }

  addTask(task: Tasks):Observable<Tasks> {
    return this.http.post<Tasks>(this.url, task, httpOptions)
  }
}
