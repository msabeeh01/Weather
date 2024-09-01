import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DayCastComponent } from './day-cast/day-cast.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DayCastComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'client';
}
