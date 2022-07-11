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
  { path: 'user', component: UserComponent,
    children: [
      { path: ':id/:name', component: UserComponent
      },
      { path: ':id/edit', component: EditServerComponent
      },
    ]
  },
  { path: 'static', component: StaticDataComponent, data: {message: "page not found"} }
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
    EditServerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
export const routingComponents = [
   ChildrouteComponent,
   ChildroutingComponent
]
