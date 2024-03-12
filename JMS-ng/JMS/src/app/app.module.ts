import { Injectable, NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';import {Component} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HomeComponent } from './home/home.component';
import { EmailComponent } from './email/email.component';

import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { EmailService } from './email.service';


import { provideHttpClient, HttpClientModule, withFetch } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    EmailComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule, MatButtonModule, MatIconModule,MatButtonModule, MatIconModule
    ,MatFormFieldModule, MatInputModule, MatSelectModule,FormsModule,HttpClientModule,HttpClientModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync(),
    EmailService
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
