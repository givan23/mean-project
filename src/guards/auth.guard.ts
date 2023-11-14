import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";


const user = {
  id: '1',
  name: 'Mario Rossi',
  role: 'customer',
  authenticated: false,
}

export const AuthGuard: CanActivateFn = (route, state) => {
  return user.authenticated ? user.authenticated : inject(Router).createUrlTree(['/auth/login']);
};
