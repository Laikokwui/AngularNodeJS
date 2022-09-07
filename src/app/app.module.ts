import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoatComponent } from './components/boat/boat.component';
import { ParentComponent } from './components/parent/parent.component';
import { HomeComponent } from './components/home/home.component';
import { CustomerlistComponent } from './components/customerlist/customerlist.component';
import { CustomercreateComponent } from './components/customercreate/customercreate.component';
import { CustomerupdateComponent } from './components/customerupdate/customerupdate.component';

@NgModule({
  declarations: [
    AppComponent,
    BoatComponent,
    ParentComponent,
    HomeComponent,
    CustomerlistComponent,
    CustomercreateComponent,
    CustomerupdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
