import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { TableService }     from './table.service';
import { AppComponent }     from './app.component';
import { TableComponent }   from './table.component';
import { DashboardComponent }   from './dashboard.component';
import { AppRoutingModule }     from './app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    TableComponent,
    DashboardComponent
  ],
  providers: [ TableService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
