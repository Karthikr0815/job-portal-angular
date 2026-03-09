import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const snackBar = inject(MatSnackBar);
  
  const userStr = localStorage.getItem('user');
  if (userStr) {
    const user = JSON.parse(userStr);
    if (user.role === 'company') {
      return true;
    }
  }

  snackBar.open('Access Denied: Recruiter login required.', 'Close', { duration: 3000 });
  router.navigate(['/login']);
  return false;
};