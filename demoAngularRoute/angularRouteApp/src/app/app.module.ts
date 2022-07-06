import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterComponent } from './router/router.component';
import { RouterlinksComponent } from './routerlinks/routerlinks.component';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  { path: 'route', component: RouterComponent},
  { path: 'routelink', component: RouterlinksComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    RouterComponent,
    RouterlinksComponent
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
