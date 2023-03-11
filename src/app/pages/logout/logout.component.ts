import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators  } from '@angular/forms';
import { Router } from '@angular/router';
import { SessionService } from 'src/services/session.service';

interface FormParams {
  email: string;
  password: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './logout.component.html'
})
export class LogoutComponent implements OnInit {

  constructor(
    private readonly sessionService: SessionService,
    private readonly router: Router
  ) {}

  async ngOnInit() {
    this.sessionService.destroy()
    await this.router.navigate(['/login']);
  }
}
