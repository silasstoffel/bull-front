
import { Component, OnInit } from '@angular/core';
import { Account } from 'src/models/account.model';
import { AccountService } from 'src/services/account.service';
import { SessionService } from 'src/services/session.service';

@Component({
  selector: 'app-account-bar',
  templateUrl: './account-bar.component.html',
})
export class AccountBarComponent implements OnInit  {

  account!: Account;

  constructor(private readonly accountService: AccountService) {}

  async ngOnInit() {
    this.account = await this.accountService.getAccountFromActiveSession();
  }

}
