import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import {FormsModule} from "@angular/forms";
import {NbCheckboxModule} from "@nebular/theme";
import {NbAuthBlockComponent} from "@nebular/auth";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NbCheckboxModule,

  ],
  declarations: [LoginComponent]
})

export class AuthModule { }
