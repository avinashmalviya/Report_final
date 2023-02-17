import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginPageComponent } from './login-page/login-page.component';



@NgModule({
  declarations: [
    SignInComponent,
    SignUpComponent,
    LoginPageComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    SignInComponent,
    SignUpComponent,
    LoginPageComponent
  ]
})
export class UserLoginModule { }
