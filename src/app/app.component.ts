import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'alpha-motor-world';
  footer = false;

  ngOnInit(): void {
    setInterval(() => {
      this.getUrl();
    }, 80);
  }
  getUrl() {
    let url = window.location.href;
 if (url.includes('/login') || url.includes('/register')) {
      this.footer = false;
    } else {
      this.footer = true;
    }
  }
}
