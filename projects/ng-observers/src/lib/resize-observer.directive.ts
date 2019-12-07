import { Directive, ElementRef, EventEmitter, OnDestroy, Output } from '@angular/core';
import { ResizeObserver } from 'resize-observer';

const entriesMap = new WeakMap();

const ro = new ResizeObserver(entries => {
  for (const entry of entries) {
    if (entriesMap.has(entry.target)) {
      const comp = entriesMap.get(entry.target);
      comp.resizeCallback(entry);
    }
  }
});

@Directive({
  selector: '[resizeObserver]'
})
export class ResizeObserverDirective implements OnDestroy {

  // tslint:disable-next-line:no-output-on-prefix
  @Output()
  onResize = new EventEmitter();

  constructor(private el: ElementRef) {
    const target = this.el.nativeElement;
    entriesMap.set(target, this);
    ro.observe(target);
  }

  resizeCallback(entry) {
    this.onResize.emit(entry);
  }

  ngOnDestroy() {
    const target = this.el.nativeElement;
    ro.unobserve(target);
    entriesMap.delete(target);
  }
}
