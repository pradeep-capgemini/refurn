import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environment/environment';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class RefurnServiceService {
private apiUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {}

  register(user: User): Observable<User> {
    console.log('user',user)
    return this.http.post<User>(`${this.apiUrl}/register`, user);
  }
}
