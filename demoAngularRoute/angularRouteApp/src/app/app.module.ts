import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterComponent } from './router/router.component';
import { RouterlinksComponent } from './routerlinks/routerlinks.component';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './user/user.component';

const appRoutes: Routes = [
  { path: 'route', component: RouterComponent},
  { path: 'routelink', component: RouterlinksComponent},
  { path: 'users', component: UsersComponent},
  { path: 'users/:id/:name', component: UserComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    RouterComponent,
    RouterlinksComponent,
    UsersComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
