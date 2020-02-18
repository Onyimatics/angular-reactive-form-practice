import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from  '@angular/router';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


// const  appRoutes:  Routes  = [
//   { path:  'permmision', component:  PermissionsComponent },
//   ];
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
