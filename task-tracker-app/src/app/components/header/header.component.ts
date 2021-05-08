import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Subscription } from 'rxjs';

import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  title = 'Task Tracker';
  showAddTask: boolean = false;
  uiSubscription: Subscription;

  constructor(private uiService: UiService, private router: Router) {
    this.uiSubscription = this.uiService.onToggle().subscribe(value => this.showAddTask = value);
  }

  ngOnInit(): void {
  }

  toggleAddTask(): void {
    this.uiService.toggleAddTask();
  }

  ngOnDestroy(): void {
    this.uiSubscription?.unsubscribe();
  }

  hasRoute(route: string): boolean {
    return this.router.url === route;
  }
}
