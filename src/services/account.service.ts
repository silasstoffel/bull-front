import { Injectable } from '@angular/core';
import { AuthGateway } from 'src/gateways/auth.gateway';
import { Account } from 'src/models/account.model';
import { SessionStorageRepository } from 'src/repositories/session-storage.repository';


@Injectable()
export class AccountService {

  constructor(private readonly authGateway: AuthGateway) {}

  public async getAccountFromActiveSession(): Promise<Account> {
    return this.authGateway.getAccountFromActiveSession();
  }

}
