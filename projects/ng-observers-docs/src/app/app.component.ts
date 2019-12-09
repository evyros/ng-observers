import { ChangeDetectorRef, Component } from '@angular/core';
import snippets from './snippets';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  resizeElement = {
    width: 0,
    height: 0
  };
  shown = false;
  snippets = snippets;

  constructor(private ref: ChangeDetectorRef) { }

  onResize(e) {
    console.log(e);
    this.resizeElement = {
      width: e.contentRect.width,
      height: e.contentRect.height
    };
    this.ref.detectChanges();
  }

  onMutate(e) {
    console.log('on mutate', e);
  }

  onIntersection(e) {
    console.log('on intersect', e);
  }
}
