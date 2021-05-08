import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { tasks } from '../response/mock-tasks-response';

import { Task } from '../models/Task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  getTasks(): Observable<Task[]> {
    return of(tasks);
  }
}
