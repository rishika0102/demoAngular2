import { Injectable } from '@angular/core';
import { CanDeactivate,
          ActivatedRouteSnapshot,
          RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

export interface IDeactivateGuard {
  canExit: () => boolean | Promise<boolean> | Observable<boolean>;
}
export class DeactivateService implements CanDeactivate<IDeactivateGuard>{

  constructor() { }
  canDeactivate(component: IDeactivateGuard, route: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState: RouterStateSnapshot):boolean | Promise<boolean> | Observable<boolean>{
      console.log("DeactivateServices Working");
      return component.canExit();
  };
}
