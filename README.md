# ng-observers

> Angular (6+) directives for native observers API for detecting element's size change, visibility and DOM manipulations.
> 
> Giving you `onResize()`, `onMutate()` and `onIntersection()` using [ResizeObserver](https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver), [MutationObserver](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver) and [IntersectionObserver](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API).

---

## Getting started

```bash
npm i ng-observers
```

then import `NgObserversModule`:

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
  
  onIntersection(e) {
    // ...
  }

  onMutate(e) {
    // ...
  }
  
}
```

#### Additional options:
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

---

## License

This project is licensed under an [MIT license](LICENSE.md).
