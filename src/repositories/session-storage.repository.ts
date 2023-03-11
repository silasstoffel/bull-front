import { Injectable } from "@angular/core";
import Session from "src/models/session.model";

@Injectable()
export class SessionStorageRepository {

  private readonly storageIdentifier = '@bull[session]';

  store(session: Session): void {
    localStorage.setItem(this.storageIdentifier, JSON.stringify(session));
  }

  get(): Session | null   {
    const data = localStorage.getItem(this.storageIdentifier);

    if (data) {
      return JSON.parse(data) as Session;
    }

    return null;
  }

  delete(): void {
    localStorage.removeItem(this.storageIdentifier);
  }
}
