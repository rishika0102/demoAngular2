import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { SuccessComponent } from './success/Success.component';
import { CounterComponent } from './counter/counter.component';
import { CockpitComponent } from './cockpit/cockpit.component';
import { GameControlComponent } from './game-control/game-control.component';
import { OddComponent } from './odd/odd.component';
import { EvenComponent } from './even/even.component';
import { BasicHighlightDirective } from './basic-highlight/basic-highlight.directive';
import { BetterHighlightDirective } from './better-highlight.directive';



@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    SuccessComponent,
    CounterComponent,
    CockpitComponent,
    GameControlComponent,
    OddComponent,
    EvenComponent,
    BasicHighlightDirective,
    BetterHighlightDirective,

  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  exports: [
     BetterHighlightDirective
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
