import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn(): boolean {
    return !!localStorage.getItem('authToken');
  }

  getUserName(): string | null {
    return localStorage.getItem('username');
  }


  getUserType(): string | null {
    return localStorage.getItem('userType');
  }

  getRole(): string | null {
    return localStorage.getItem('role');
  }

}
