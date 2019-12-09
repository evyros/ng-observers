# ng-observers

[![npm version](https://badge.fury.io/js/ng-observers.svg)](https://badge.fury.io/js/ng-observers)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)

> Angular (6+) directives for native observers API for detecting element's size change, visibility and DOM manipulations.
> 
> Giving you `onResize()`, `onMutate()` and `onIntersection()` using [ResizeObserver](https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver), [MutationObserver](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver) and [IntersectionObserver](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API).

---

## Demonstration

[Demo on Stackblitz](https://stackblitz.com/edit/angular-mzqya5)

## Getting started

```bash
npm i ng-observers
```

Then import `NgObserversModule`:

```typescript
import { NgObserversModule } from 'ng-observers';

@NgModule({
  declarations: [AppComponent],
  imports: [NgObserversModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
```

## Usage Example

### Resize: 
```html
<div resizeObserver (onResize)="onResize($event)"></div>
```

### Intersection: 
```html
<div intersectionObserver (onIntersection)="onIntersection($event)"></div>
```

### Mutation:
```html
<div mutationObserver (onMutate)="onMutate($event)"></div>
```

```typescript
class AppComponent {

  onResize(event) {
    // ...
  }
  
  onIntersection(event) {
    // ...
  }

  onMutate(event) {
    // ...
  }
  
}
```

#### Additional options for mutationObserver:
```html
<div mutationObserver
     [options]="{attributes: true, subtree: true}"
     (onMutate)="onMutate($event)"></div>
```
`options` is optional, structured as [MutationObserverInit](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserverInit):
```javascript
options = {
    childList: false,
    attributes: true,
    subtree: false,
    characterData: true
}
```
