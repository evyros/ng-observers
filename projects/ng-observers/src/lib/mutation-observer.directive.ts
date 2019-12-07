import { Directive, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';

@Directive({
  selector: '[mutationObserver]'
})
export class MutationObserverDirective implements OnInit, OnDestroy {

  // tslint:disable-next-line:no-output-on-prefix
  @Output()
  onMutate = new EventEmitter();

  @Input()
  options: MutationObserverInit = {
    attributes: true,
    characterData: true,
    childList: true,
    subtree: true
  };

  observer: MutationObserver;

  constructor(private el: ElementRef) {}

  ngOnInit() {
    if (!this.validateOptions(this.options)) {
      throw new Error('ng-observers: options object must set at least one of "attributes", "characterData", or "childList" to true.');
    }
    this.observe();
  }

  observe() {
    const target = this.el.nativeElement;
    this.observer = new MutationObserver((mutation) => {
      this.onMutate.emit(mutation);
    });
    this.observer.observe(target, this.options);
  }

  validateOptions(options: MutationObserverInit): boolean {
    let isValid = false;
    for (const key in options) {
      if (options[key]) {
        isValid = true;
      }
    }
    return isValid;
  }

  ngOnDestroy() {
    this.observer.disconnect();
  }
}
