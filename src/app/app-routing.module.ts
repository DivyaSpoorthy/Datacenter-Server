import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {InfraComponent} from './infra/infra.component';

const routes: Routes = [ {
  path: 'infra' , component: InfraComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
