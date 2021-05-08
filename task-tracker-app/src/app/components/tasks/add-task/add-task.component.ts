import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { Task } from 'src/app/models/Task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {
  @Output() onAddTask = new EventEmitter<Task>()
  text!: string;
  day!: string;
  reminder: boolean = false;

  constructor() { }

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

}
