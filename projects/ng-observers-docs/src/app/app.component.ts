import { Component } from '@angular/core';
import snippets from './snippets';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-observers-app';
  resizeElement = {
    width: 0,
    height: 0
  };
  shown = false;
  shown2 = false;
  snippets = snippets;

  onResize(e) {
    this.resizeElement = {
      width: e.contentRect.width,
      height: e.contentRect.height
    };
  }

  onMutate(e) {
    console.log('on mutate', e);
  }

  onIntersection(e) {
    console.log('on intersect', e);
  }
}
