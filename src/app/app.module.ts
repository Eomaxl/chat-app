import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './users/login/login.component';

import { ChatModule } from './chat/chat.module';
import { SharedModule } from './shared/shared.module';
import { UsersModule } from './users/users.module';
import { ToasterService } from './toaster-service.service';

import { FormsModule , ReactiveFormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { HttpClientModule } from '@angular/common/http';

var routePage = [
  {path:'login',component:LoginComponent,pathMatch:'full'},
 
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'*',component:LoginComponent},
  {path:'**',component:LoginComponent}
]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    ChatModule,
    SharedModule,
    UsersModule,
    RouterModule.forRoot(routePage),
    BrowserAnimationsModule,
    ToastrModule.forRoot()
   
  ],
  providers: [ToasterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
