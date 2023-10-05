import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  private apiUrl = 'http://localhost:3000';

  getCompleteUserData(): Observable<any> {
    return this.http.get(`${this.apiUrl}/get-details`);
  }

  login(data: {}): Observable<any> {
    return this.http.post(`${this.apiUrl}/auth`, data);

  }
  register(data: {}): Observable<any> {
    return this.http.post(`${this.apiUrl}/create-user`, data);
  }
}
