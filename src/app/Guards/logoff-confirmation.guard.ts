import { inject } from '@angular/core';
import { CanDeactivateFn, Router } from '@angular/router';
import { AuthService } from '../Services/auth.service';

export const logoffConfirmationGuard: CanDeactivateFn<unknown> = (component, currentRoute, currentState, nextState) => {
  
  const authService = inject(AuthService);

  return authService.logOffConfirmation("Are you sure want to Logout??");
};
