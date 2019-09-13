import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';

import { RouterModule, Routes } from '@angular/router';


var routePage = [
  {path:'sign-up',component:SignUpComponent},
 
]

@NgModule({
  declarations: [LoginComponent, SignUpComponent],
  imports: [
    CommonModule,RouterModule.forChild(routePage),
    // FormsModule,
    // ReactiveFormsModule

  ]
})
export class UsersModule { }
