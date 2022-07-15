import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Modul1Component } from './modul1/modul1.component';
import { Modul2Component } from './modul2/modul2.component';
import { modulRouting } from './modul-routing.module';
@NgModule({
  declarations: [
   Modul1Component,
   Modul2Component
  ],
  imports: [
    CommonModule,
    modulRouting
  ],
  exports: [
   Modul1Component,
   Modul2Component
  ]
})

export class ModulModule {
  // console.log("module....");
}
