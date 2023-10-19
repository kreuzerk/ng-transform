import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  luffy = {
    name: 'Monkey D. Luffy',
    devilsFruit: 'Gomu Gomu no Mi',
    crew: 'Straw Hat Pirates'
  }
}
