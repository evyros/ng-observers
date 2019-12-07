import { NgModule } from '@angular/core';
import { ResizeObserverDirective } from './resize-observer.directive';
import { MutationObserverDirective } from './mutation-observer.directive';
import { IntersectionObserverDirective } from './intersection-observer.directive';

@NgModule({
  declarations: [
    ResizeObserverDirective,
    MutationObserverDirective,
    IntersectionObserverDirective
  ],
  imports: [
  ],
  exports: [
    ResizeObserverDirective,
    MutationObserverDirective,
    IntersectionObserverDirective
  ]
})
export class NgObserversModule { }
