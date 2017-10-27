import { Injectable, EventEmitter } from '@angular/core';

import { CounterService } from './counter.service';

@Injectable()
export class UsersService {

  activeUsers = ['Max', 'Anna'];
  inactiveUsers = ['Chris', 'Manu'];
  updateActive = new EventEmitter<number>();
  updateInactive = new EventEmitter<number>();
  constructor(private service: CounterService) {
    this.service.active = this.activeUsers.length;
    this.service.inactive = this.inactiveUsers.length;
  }

  onSetToInactive(id: number) {
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
  }

  onSetToActive(id: number) {
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
  }
}
