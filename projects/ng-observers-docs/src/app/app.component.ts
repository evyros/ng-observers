import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-observers-app';
  shown = false;
  shown2 = false;

  onResize(e) {
    console.log('resize!', e);
  }

  onMutate(e) {
    console.log('on mutate', e);
  }

  onIntersection(e) {
    console.log('on intersect', e);
  }
}
