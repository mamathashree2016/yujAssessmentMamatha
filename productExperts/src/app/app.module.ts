import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule }   from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderNavbarComponent } from './component/header-navbar/header-navbar.component';
import { FooterComponent } from './component/footer/footer.component';
import { WhatItIsComponent } from './component/what-it-is/what-it-is.component';
import { HowItWorksComponent } from './component/how-it-works/how-it-works.component';
import { AppRoutingModule } from './app-routing.module';
import { DirectoryComponent } from './component/directory/directory.component';
import { SignUpComponent } from './component/sign-up/sign-up.component';
import { SignInComponent } from './component/sign-in/sign-in.component';

import {DirectoryService} from './services/directory.service';
import { SearchfilterPipe } from './searchfilter.pipe';

const routes: Routes = [
  { path: 'what', component: WhatItIsComponent },
  { path: 'how', component: HowItWorksComponent },
  { path: 'directory', component: DirectoryComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'signin', component: SignInComponent },
  { path: '', redirectTo: '/what', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderNavbarComponent,
    FooterComponent,
    WhatItIsComponent,
    HowItWorksComponent,DirectoryComponent,SignUpComponent,SignInComponent, SearchfilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,RouterModule.forRoot(routes),FormsModule,ReactiveFormsModule,HttpClientModule
  ],
  providers: [DirectoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
