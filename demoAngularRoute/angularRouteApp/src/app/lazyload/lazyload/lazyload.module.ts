import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyloadComponent } from '../lazyload.component';
import { Routes, RouterModule} from '@angular/router';

const routes: Routes = [
  {path: '', component: LazyloadComponent}
]

@NgModule({
  declarations: [LazyloadComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class LazyloadModule { }
