import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ANGULAR APP LOGIN';
  showError = false;
  userName = '';

  onClickLogin() {
    const localStorageName = localStorage.getItem('userName');
    console.log({ localStorageName });

    const trimmedName = this.userName.trim();

    if (!trimmedName) {
      this.showError = true;
      return;
    }
    this.showError = false;
    console.log(`Hi, ${trimmedName}... welcome!`);
    localStorage.setItem('userName', trimmedName);
    location.pathname = '/home';
  }
}
