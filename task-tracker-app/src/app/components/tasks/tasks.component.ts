import { Component, OnDestroy, OnInit } from '@angular/core';

import { Subscription } from 'rxjs';

import { TaskService } from '../../services/task.service';

import { Task } from '../../models/Task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit, OnDestroy {
  tasks: Task[] = [];
  tasksSubscription!: Subscription;

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.tasksSubscription = this.taskService.getTasks().subscribe((res: Task[]) => this.tasks = res);
  }

  ngOnDestroy(): void {
    this.tasksSubscription?.unsubscribe();
  }
}
