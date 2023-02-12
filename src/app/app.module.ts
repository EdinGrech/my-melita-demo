import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './pages/login/login.component';

//import angulat materials
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';

import { UsernameComponent } from './pages/login/input/username/username.component';
import { PasswordComponent } from './pages/login/input/password/password.component';
import { RememberMeComponent } from './pages/login/checkBox/remember-me/remember-me.component';
import { LoginBtnComponent } from './pages/login/button/login-btn/login-btn.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UsernameComponent,
    PasswordComponent,
    RememberMeComponent,
    LoginBtnComponent,
  ],
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
