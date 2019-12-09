import { NgModule } from '@angular/core';
import { ResizeObserverDirective } from './resize-observer.directive';
import { MutationObserverDirective } from './mutation-observer.directive';
import { IntersectionObserverDirective } from './intersection-observer.directive';

const directives = [
  ResizeObserverDirective,
  MutationObserverDirective,
  IntersectionObserverDirective
];

@NgModule({
  declarations: directives,
  exports: directives
})
export class NgObserversModule { }
