import { Component, OnInit } from '@angular/core';

import { tasks } from '../../response/mock-tasks-response';

import { Task } from '../../models/Task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {
  tasks: Task[] = tasks;
  constructor() { }

  ngOnInit(): void {
  }

}
