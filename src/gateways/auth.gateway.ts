import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { Account } from 'src/models/account.model';
import { BullBackHttpClient } from './bull-back-http-client';

export interface AuthResponse {
  token: string;
}

@Injectable()
export class AuthGateway {

  constructor(private readonly client: BullBackHttpClient) {}

  public async auth(email: string, password: string): Promise<AuthResponse> {
    const request = this.client.post<AuthResponse>('/auth', { email, password });
    return firstValueFrom(request);
  }

  public async getAccountFromActiveSession(): Promise<Account> {
    const request = this.client.get<Account>('/auth/me');
    return firstValueFrom(request);
  }
}
