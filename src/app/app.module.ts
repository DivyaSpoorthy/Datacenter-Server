import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {
  MatButtonModule,
  MatExpansionModule,
  MatIconModule, MatInputModule,
  MatListModule, MatProgressBarModule, MatRippleModule,
  MatSidenavModule,
  MatTableModule,
  MatToolbarModule
} from '@angular/material';

import { FlexLayoutModule } from '@angular/flex-layout';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { InfraComponent } from './infra/infra.component';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import { InfraDataComponent } from './infra-data/infra-data.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    InfraComponent,
    InfraDataComponent,
  ],
  imports: [
    FlexLayoutModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatExpansionModule,
    MatCardModule,
    MatGridListModule,
    MatTableModule,
    MatInputModule,
    FormsModule,
    MatRippleModule,
    MatProgressBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
