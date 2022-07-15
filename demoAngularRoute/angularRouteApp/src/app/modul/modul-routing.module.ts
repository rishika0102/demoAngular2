import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Modul1Component } from './modul1/modul1.component';
import { Modul2Component } from './modul2/modul2.component';
const modRoute: Routes = [
  {
    path: 'mod1' , component: Modul1Component
  },
   {
    path: 'mod2' , component: Modul2Component
  }

];

@NgModule({
 imports: [RouterModule.forChild(modRoute)],
 exports: [RouterModule]

})
export class modulRouting{

}
