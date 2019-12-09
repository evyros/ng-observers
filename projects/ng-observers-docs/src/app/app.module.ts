import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgObserversModule } from 'ng-observers';
import {HIGHLIGHT_OPTIONS, HighlightModule} from 'ngx-highlightjs';

export function getHighlightLanguages() {
  return {
    html: () => import('highlight.js/lib/languages/xml')
  };
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgObserversModule,
    HighlightModule
  ],
  providers: [
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: {
        languages: getHighlightLanguages()
      }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
