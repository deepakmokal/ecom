import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationsRoutingModule } from './authentications-routing.module';
import { AuthenticationsComponent } from './authentications.component';
import { RegisterComponent } from './register/register.component';

import { SharedModule } from '../shared/shared/shared.module';

@NgModule({
  declarations: [
    AuthenticationsComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    AuthenticationsRoutingModule,
    SharedModule
  ]
})
export class AuthenticationsModule { }
