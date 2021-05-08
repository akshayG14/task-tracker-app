import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';

import { Task } from 'src/app/models/Task';

import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit, OnDestroy {
  @Output() onAddTask = new EventEmitter<Task>()
  text!: string;
  day!: string;
  reminder: boolean = false;
  showAddTask!: boolean;
  uiSubscription: Subscription;

  constructor(private uiService: UiService) {
    this.uiSubscription = this.uiService.onToggle().subscribe(value => this.showAddTask = value);
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    if (!this.text || !this.day) {
      alert(`Please add ${this.text ? 'Day' : this.day ? 'Text' : 'Text and Day'}!`);
      return;
    }
    this.onAddTask.emit({
      text: this.text,
      day: this.day,
      reminder: this.reminder
    });
    this.clearForm();
  }

  clearForm(): void {
    this.text = '';
    this.day = '';
    this.reminder = false;
  }

  ngOnDestroy(): void {
    this.uiSubscription?.unsubscribe();
  }
}
