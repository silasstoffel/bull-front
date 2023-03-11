import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
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
}
