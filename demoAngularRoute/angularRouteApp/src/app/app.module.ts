import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
import { HttpClientModule } from '@angular/common/http';
import { HttpserviceComponent } from './httpservice/httpservice.component';
import { AuthService } from './auth.service';
import { AuthguardService} from './authguard.service';
import { DeactivateService } from './deactivate.service';
import { DeactivateComponent } from './deactivate/deactivate.component';
import { UserResloveService } from './user-reslove.service';
import {UserService } from './user.service';
const appRoutes: Routes = [
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
      },
      { path: ':id', component: EditServerComponent
      },
    ]
  },
  {path: 'deactive', component: DeactivateComponent, canDeactivate: [DeactivateService]},
  { path: 'static', component: StaticDataComponent, data: {message: "page not found"} },
  { path: 'react', component: ReactiveComponent},
  { path: 'fire', component: FirebaseComponent},
  { path: 'htp', component: HttpserviceComponent},
  { path: '**', component: WildCardComponent }
]

@NgModule({
  declarations: [
    AppComponent,
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
    DeactivateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AuthService, AuthguardService, DeactivateService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
export const routingComponents = [
   ChildrouteComponent,
   ChildroutingComponent
]
