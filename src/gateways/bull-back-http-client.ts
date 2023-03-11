import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class BullBackHttpClient {
  private baseUrl: string;

  constructor(private readonly http: HttpClient) {
    this.baseUrl = environment.bullBackBaseUrl;
  }

  public get<T>(url: string): Observable<T> {
    return this.http.get<T>(this.createUrl(url));
  }

  public post<T>(url: string, body: any): Observable<T> {
    return this.http.post<T>(this.createUrl(url), body);
  }

  private createUrl(path:string): string {
    return `${this.baseUrl}${path}`;
  }
}
