import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-day-cast',
  standalone: true,
  imports: [],
  templateUrl: './day-cast.component.html',
  styleUrl: './day-cast.component.css'
})
export class DayCastComponent {
  @Input() temp: number = 0;

}
