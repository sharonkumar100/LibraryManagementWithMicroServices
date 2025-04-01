import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const roles = JSON.parse(localStorage.getItem('loggedInUser') || '{}')
  if(roles?.role==='Admin'){
    return true;
  }else{
    return false;
  }
  
};
