import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { RoutesRoutingModule } from './routes-routing.module';
import { RECAPTCHA_SETTINGS,  RecaptchaSettings } from 'ng-recaptcha';
import { environment } from '@env/environment';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatChipsModule } from '@angular/material/chips';


import { LoginComponent } from './sessions/login/login.component';
import { Error403Component } from './sessions/403.component';
import { Error404Component } from './sessions/404.component';
import { Error500Component } from './sessions/500.component';
import { FormsModule } from '@angular/forms';
import { RecaptchaModule } from 'ng-recaptcha';

const COMPONENTS: any[] = [
  LoginComponent,
  Error403Component,
  Error404Component,
  Error500Component,
];
const COMPONENTS_DYNAMIC: any[] = [];

@NgModule({
  imports: [SharedModule, RoutesRoutingModule, FormsModule, RecaptchaModule, MatFormFieldModule, MatChipsModule],
  providers: [
     {
       provide: RECAPTCHA_SETTINGS,
     useValue: {
       siteKey: environment.recaptcha.siteKey,
     } as RecaptchaSettings
     },
   ],
  declarations: [...COMPONENTS, ...COMPONENTS_DYNAMIC],
})
export class RoutesModule {}
