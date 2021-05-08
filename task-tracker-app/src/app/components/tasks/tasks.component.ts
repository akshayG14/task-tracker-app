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
  getTaskSub!: Subscription;
  deleteTaskSub!: Subscription;
  toggleReminderSub!: Subscription;
  addTaskSub!: Subscription;

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.getTaskSub = this.taskService.getTasks().subscribe((res: Task[]) => this.tasks = res);
  }

  deleteTask(task: Task) {
    this.deleteTaskSub = this.taskService.deleteTask(task).subscribe(() => {
      this.tasks = this.tasks.filter(t => t.id !== task.id)
    });
  }

  toggleReminder(task: Task): void {
    task.reminder = !task.reminder;
    this.toggleReminderSub = this.taskService.updateTaskReminder(task).subscribe();
  }

  addTask(task: Task): void {
    this.addTaskSub = this.taskService.addTask(task).subscribe((task: Task) => this.tasks.push(task));
  }

  ngOnDestroy(): void {
    this.getTaskSub?.unsubscribe();
    this.deleteTaskSub?.unsubscribe();
    this.toggleReminderSub?.unsubscribe();
    this.addTaskSub?.unsubscribe();
  }
}
