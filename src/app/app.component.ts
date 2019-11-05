import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  items: any[] = Array.from(Array(12).keys(), n => {
    return {id: n, show: false};
  });

  onSwipe = (evt, item) => item.show = !item.show;
}
