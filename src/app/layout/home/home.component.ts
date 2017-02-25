import { Component } from '@angular/core';

import { HeaderComponent } from '../shared/header.component';

@Component({
  selector: 'app-home',
  template: `
    <app-header></app-header>
  `,
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor () {}
}