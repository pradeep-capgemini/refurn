import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { Router } from '@angular/router';

export const authGuard: CanActivateFn = () => {
  const router = inject(Router);

  try {
    const token = localStorage.getItem('authToken');
    // token must exist and be non-empty
    if (token && token.trim() !== '') {
      return true;
    } else {
      console.warn('AuthGuard: No valid token found. Redirecting to login.');
      return router.createUrlTree(['/login']);
    }

  } catch (error) {
    console.error('AuthGuard: Error checking token:', error);
    return router.createUrlTree(['/login']);
  }
};