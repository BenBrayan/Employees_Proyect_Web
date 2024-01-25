import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { RECAPTCHA_SETTINGS, RecaptchaFormsModule, RecaptchaModule, RecaptchaSettings } from 'ng-recaptcha';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { AppComponent } from './app.component';
import { MatBottomSheetModule} from '@angular/material/bottom-sheet';
import { CoreModule } from '@core/core.module';
import { ThemeModule } from '@theme/theme.module';
import { MatButtonModule} from '@angular/material/button';
import { SharedModule } from '@shared/shared.module';
import { MatCardModule} from '@angular/material/card';
import { RoutesModule } from './routes/routes.module';
import { FormlyConfigModule } from './formly-config.module';
import { NgxPermissionsModule } from 'ngx-permissions';
import { ToastrModule } from 'ngx-toastr';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { environment } from '@env/environment';
import { BASE_URL, httpInterceptorProviders, appInitializerProviders } from '@core';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemDataService } from '@shared/in-mem/in-mem-data.service';
import { AuthModule } from '@auth0/auth0-angular';
import { MaterialModule } from './material.module';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import {MatChipsModule} from '@angular/material/chips';



// Required for AOT compilation
export function TranslateHttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [AppComponent],
  imports: [

    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    RecaptchaFormsModule,
    RecaptchaModule,
    MatDialogModule,
    MatSelectModule,
    MatBottomSheetModule,
    CoreModule,
    ThemeModule,
    MatButtonModule,
    SharedModule,
    MatCardModule,
    RoutesModule,
    MaterialModule,
    MatTableModule,
    MatInputModule,
    MatPaginatorModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatIconModule,
    MatChipsModule,
    AuthModule.forRoot({
      domain: 'dev-ozpcjfvzsoy111ab.us.auth0.com',
      clientId: 'UHbR2NihmDZ9FYxDbFD7APaZ6783tvzQ'
    }),
    FormlyConfigModule.forRoot(),
    NgxPermissionsModule.forRoot(),
    ToastrModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: TranslateHttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    // Demo purposes only for GitHub Pages
    HttpClientInMemoryWebApiModule.forRoot(InMemDataService, {
      dataEncapsulation: false,
      passThruUnknownUrl: true,
    }),
  ],
  providers: [
     { provide: LocationStrategy, useClass: HashLocationStrategy },
    { provide: BASE_URL, useValue: environment.baseUrl },
    {
      provide: RECAPTCHA_SETTINGS,
    useValue: {
      siteKey: environment.recaptcha.siteKey,
    } as RecaptchaSettings
    },
    httpInterceptorProviders,
    appInitializerProviders,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
