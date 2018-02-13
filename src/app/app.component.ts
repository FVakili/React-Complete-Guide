import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  absent: Boolean = true;
  names : string[] = ['foad', 'ali', 'mohammad', 'kian'];

  score ="90"

  makeDisappear() {
    this.absent = !this.absent;
  }
}


