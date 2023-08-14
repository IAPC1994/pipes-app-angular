import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';

import  localEsCl  from '@angular/common/locales/es-CL';
import  localEnAu  from '@angular/common/locales/en-AU';
import { registerLocaleData } from '@angular/common'

import { AppComponent } from './app.component';

registerLocaleData( localEsCl );
registerLocaleData( localEnAu );

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,

    SharedModule,
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'en-AU' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
