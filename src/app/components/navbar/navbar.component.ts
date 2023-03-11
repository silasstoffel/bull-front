
import { Component, OnInit } from '@angular/core';
import { SessionService } from 'src/services/session.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavBarComponent implements OnInit  {
  readonly brand = 'Bull-Front';
  authorized!: boolean;

  constructor(private readonly sessionService: SessionService) {}

  async ngOnInit() {
    const session = this.sessionService.active();
    this.authorized = session && session.authorized ? true : false;

    // subscribe events from session
    this.sessionService.events.subscribe(event => {
      this.authorized = event.authorized
    });
  }

}
