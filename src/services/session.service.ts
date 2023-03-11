import { EventEmitter, Injectable } from '@angular/core';
import { AuthGateway } from 'src/gateways/auth.gateway';
import Session from 'src/models/session.model';
import { SessionStorageRepository } from 'src/repositories/session-storage.repository';


@Injectable({
  providedIn: 'root'
})
export class SessionService {

  public readonly events = new EventEmitter<Session>();

  constructor(
    private readonly sessionRepository: SessionStorageRepository,
    private readonly authGateway: AuthGateway
  ) {}


  public async start(email: string, password: string): Promise<boolean> {

    const response = await this.authGateway.auth(email, password)

    const session = { authorized: true, token: response.token };
    this.sessionRepository.store(session);

    this.events.emit(session);

    return true;
  }

  async getActiveSession() {

  }

  destroy() {
    this.sessionRepository.delete();
    this.events.emit({ authorized: false, token: null });
  }

  active(): Session | null {
    return this.sessionRepository.get();
  }
}
