import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

import { UsersService } from '../service/users.service';
import { CounterService } from '../service/counter.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css'],
  providers: []
})
export class InactiveUsersComponent implements OnInit {
  @Input() users: string[];
  @Output() userSetToActive = new EventEmitter<number>();
  inativos: number;

  constructor(private service: UsersService, private serviceCounter: CounterService) { 
    this.service.updateInactive.subscribe(
      (result: number) => this.inativos = result
    )
  }

  ngOnInit(){
    this.inativos = this.serviceCounter.inactive;
  }

  onSetToActive(id: number) {
    this.service.onSetToActive(id);
    this.service.updateInactive.emit(this.service.inactiveUsers.length);
    this.service.updateActive.emit(this.service.activeUsers.length);
  }
}
