import { Directive, ElementRef, EventEmitter, OnDestroy, Output } from '@angular/core';

/**
 * One observer for multiple elements
 */
const entriesMap = new WeakMap();
const ro = new IntersectionObserver(entries => {
  for (const entry of entries) {
    if (entriesMap.has(entry.target)) {
      const comp = entriesMap.get(entry.target);
      comp.intersectionCallback(entry);
    }
  }
});

@Directive({
  selector: '[intersectionObserver]'
})
export class IntersectionObserverDirective implements OnDestroy {

  // tslint:disable-next-line:no-output-on-prefix
  @Output()
  onIntersection = new EventEmitter();

  constructor(private el: ElementRef) {
    const target = el.nativeElement;
    entriesMap.set(target, this);
    ro.observe(target);
  }

  intersectionCallback(entry) {
    this.onIntersection.emit(entry);
  }

  /**
   * Stop observer
   */
  ngOnDestroy() {
    const target = this.el.nativeElement;
    ro.unobserve(target);
    entriesMap.delete(target);
  }
}
