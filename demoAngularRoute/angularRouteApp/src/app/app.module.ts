import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import {ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpserviceComponent } from './httpservice/httpservice.component';
import { AuthService } from './services/auth.service';
import { AuthguardService} from './services/authguard.service';
import { DeactivateService } from './services/deactivate.service';
import { UserResloveService } from './services/user-reslove.service';
import {NotificationService} from './services/notification.service';
import {HeadInterceptor} from './interceptor/head.interceptor';
import { HeadsInterceptor } from './interceptor/heads.interceptor';
import { PipesPipe } from './pipes/pipes.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { MyNgIfDirective } from './directives/my-ng-if.directive';
import { DynamicComponent } from './dynamic/dynamic.component';
import { TestComponent } from './test/test.component';
import { Test1Component } from './test1/test1.component';
import { Test2Component } from './test2/test2.component';
import { ModulComponent } from './modul/modul.component';


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    PipesPipe,
    FilterPipe,
    MyNgIfDirective,
    DynamicComponent,
    TestComponent,
    Test1Component,
    Test2Component,
    ModulComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AuthService, AuthguardService, DeactivateService, NotificationService,
  {provide: HTTP_INTERCEPTORS, useClass:HeadInterceptor, multi: true},
  {provide: HTTP_INTERCEPTORS, useClass:HeadsInterceptor, multi: true}
  ],
  bootstrap: [AppComponent],
  entryComponents: [TestComponent]
})
export class AppModule { }

