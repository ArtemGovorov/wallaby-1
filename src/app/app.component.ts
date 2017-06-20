import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div>{{test}}</div>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  test = 'test string';

  constructor() {

  }
}

