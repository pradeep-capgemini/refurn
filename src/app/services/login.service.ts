import { Injectable } from '@angular/core';
import { environment } from '../environment/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthRequest } from '../models/AuthRequest';
interface LoginResponse {
  token: string,
  role: string,
  username: string,
  userType: string
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  login(req: AuthRequest): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.apiUrl}/login`, req);
  }
}
