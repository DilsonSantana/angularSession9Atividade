import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

import { UsersService } from '../service/users.service';
import { CounterService } from '../service/counter.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css'],
  providers: []
})
export class ActiveUsersComponent implements OnInit {
  @Input() users: string[];
  ativos: number;

  constructor(private service: UsersService, private counterService: CounterService) { 
    this.service.updateActive.subscribe(
      (result: number) => this.ativos = result
    )
  }

  ngOnInit() {
    this.ativos = this.counterService.active;
  }

  onSetToInactive(id: number) {
    this.service.onSetToInactive(id);
    this.service.updateInactive.emit(this.service.inactiveUsers.length);
    this.service.updateActive.emit(this.service.activeUsers.length);

  }
}
