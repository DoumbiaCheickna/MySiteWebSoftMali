import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-navbar></app-navbar>
    <router-outlet></router-outlet>
    <app-footer></app-footer>
  `,
  styles: []
})
export class AppComponent implements OnInit {
  title = 'SOFTMALI';

  ngOnInit() {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
  }
}
