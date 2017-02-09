import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './fakedata/in-memory-data.service';

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
    InMemoryWebApiModule.forRoot(InMemoryDataService),
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
