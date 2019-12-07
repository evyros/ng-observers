import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgObserversModule } from '../../../ng-observers/src/lib/ng-observers.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgObserversModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
