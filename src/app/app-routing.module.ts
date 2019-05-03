import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {InfraComponent} from './infra/infra.component';
import {InfraDataComponent} from './infra-data/infra-data.component';
import {AlertsComponent} from './alerts/alerts.component';
import {CctvComponent} from './cctv/cctv.component';

const routes: Routes = [ {
  path: 'infra' , component: InfraComponent
}, {
  path: 'infrastats/:name', component: InfraDataComponent
}, {
  path: 'alerts', component: AlertsComponent
},
  {
    path: 'cctv', component: CctvComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
