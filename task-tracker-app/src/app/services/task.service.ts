import { Injectable } from '@angular/core';

import { tasks } from '../response/mock-tasks-response';

import { Task } from '../models/Task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  getTasks(): Task[] {
    return tasks;
  }
}
