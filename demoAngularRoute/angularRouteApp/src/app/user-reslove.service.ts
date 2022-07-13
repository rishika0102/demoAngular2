
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import {UserService} from './user.service';
import { Observable } from 'rxjs';


interface User {
  id: string;
  name: string;
}
export class UserResloveService implements Resolve<User>{
    constructor(private userService: UserService){}
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): User | Observable<User>{
      let id = route.params['id'];
      let details = this.userService.getUser(id);
      return details;
    }

}
