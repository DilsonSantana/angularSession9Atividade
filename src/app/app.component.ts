import { Component, OnInit, EventEmitter } from '@angular/core';

import { UsersService } from './service/users.service';
import { CounterService } from './service/counter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: []
})
export class AppComponent implements OnInit {
  activeUsers: string[] = [];
  inactiveUsers: string[] = [];
  
  constructor(private service: UsersService, private serviceCounter: CounterService) { }

  ngOnInit() {
    this.activeUsers = this.service.activeUsers;
    this.inactiveUsers = this.service.inactiveUsers;
  }
}
