import { HttpErrorResponse } from '@angular/common/http';
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
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  public validationMessage: string | null = null;

  public form = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  constructor(
    private readonly sessionService: SessionService,
    private readonly router: Router
  ) {}

  async ngOnInit() {
    const session = this.sessionService.active();
    if (session) {
      await this.router.navigate(['/portfolio']);
    }
  }

  async onSubmit() {
    this.validationMessage = null;

    if (this.form.invalid) {
      this.validationMessage = 'Login and password are required.';
      return;
    }

    const data = this.form.getRawValue() as FormParams;

    try {
      await this.sessionService.start(data.email, data.password);
      await this.router.navigate(['/portfolio']);
    } catch(err) {

      if (err instanceof HttpErrorResponse) {
          const detail = err as HttpErrorResponse;
          this.validationMessage = detail.error.message;
          return;
      }

      this.validationMessage = 'An error happened, try again later';
    }
  }

}
