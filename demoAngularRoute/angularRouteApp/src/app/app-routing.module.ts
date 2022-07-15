import { NgModule } from '@angular/core';
import { RouterComponent } from './router/router.component';
import { RouterlinksComponent } from './routerlinks/routerlinks.component';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './user/user.component';
import { StaticDataComponent } from './static-data/static-data.component';
import { ChildrouteComponent } from './childroute/childroute.component';
import { ChildroutingComponent } from './childrouting/childrouting.component';
import { EditServerComponent } from './edit-server/edit-server.component';
import { WildCardComponent } from './wild-card/wild-card.component';
import { ReactiveComponent } from './reactive/reactive.component';
import {ReactiveFormsModule} from '@angular/forms';
import { FirebaseComponent } from './firebase/firebase.component';
import { AuthService } from './services/auth.service';
import { AuthguardService} from './services/authguard.service';
import { DeactivateService } from './services/deactivate.service';
import { DeactivateComponent } from './deactivate/deactivate.component';
import { SubjectsComponent } from './subjects/subjects.component';
import { Custom } from './customComponent/cutsom.component';
import { HttpserviceComponent } from './httpservice/httpservice.component';
import { AuthResolveComponent } from './auth-resolve/auth-resolve.component';

const routes: Routes = [
  { path: 'route', component: RouterComponent},
  { path: 'routelink', component: RouterlinksComponent},
  { path: 'users', component: UsersComponent,
   children: [
      { path: 'routechild', component: ChildrouteComponent
      },
      { path: 'routingchild', component: ChildroutingComponent
      }
     ]
  },
  { path: 'user', component: UserComponent, canActivate: [AuthguardService],
    children: [
      { path: ':id/:name', component: UserComponent
      }
    ]
  },
  {path: 'deactive', component: DeactivateComponent, canDeactivate: [DeactivateService]
  },
  { path: 'static', component: StaticDataComponent, data: {message: "page not found"} },
  { path: 'react', component: ReactiveComponent},
  { path: 'fire', component: FirebaseComponent},
  { path: 'htp', component: HttpserviceComponent},
  { path: 'res', component: AuthResolveComponent},
  { path: 'sub', component: SubjectsComponent},
   { path: 'child', component: ChildrouteComponent},
  // { path: 'edit' , component: EditServerComponent},
  { path: '**', component: WildCardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
export const routingComponents = [
    RouterComponent,
    RouterlinksComponent,
    UsersComponent,
    UserComponent,
    StaticDataComponent,
    ChildrouteComponent,
    ChildroutingComponent,
    EditServerComponent,
    WildCardComponent,
    ReactiveComponent,
    FirebaseComponent,
    HttpserviceComponent,
    DeactivateComponent,
    AuthResolveComponent,
    SubjectsComponent,
    Custom
]
