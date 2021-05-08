import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';

import { tasks } from '../response/mock-tasks-response';

import { Task } from '../models/Task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  apiUrl = 'http://localhost:5000/tasks';

  constructor(private http: HttpClient) { }

  getMockTasks(): Observable<Task[]> {
    return of(tasks);
  }

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiUrl);
  }
}
