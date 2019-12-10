import { Directive, ElementRef, EventEmitter, OnDestroy, Output } from '@angular/core';

/**
 * One observer for multiple elements
 */
const entriesMap = new WeakMap();
const ro: IntersectionObserver = new IntersectionObserver((entries: IntersectionObserverEntry[]) => {
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
  onIntersection: EventEmitter<IntersectionObserverEntry> = new EventEmitter();

  constructor(private el: ElementRef) {
    const target: Element = el.nativeElement;
    entriesMap.set(target, this);
    ro.observe(target);
  }

  intersectionCallback(entry: IntersectionObserverEntry) {
    this.onIntersection.emit(entry);
  }

  /**
   * Stop observer
   */
  ngOnDestroy() {
    const target = this.el.nativeElement;
    if (target) {
      ro.unobserve(target);
      entriesMap.delete(target);
    }
  }
}
