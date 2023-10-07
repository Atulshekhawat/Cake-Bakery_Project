import { Component, Input } from '@angular/core';
import { Cake } from 'src/app/Models/cake';

@Component({
  selector: 'app-cake-card',
  templateUrl: './cake-card.component.html',
  styleUrls: ['./cake-card.component.css']
})
export class CakeCardComponent {
@Input() 
cake?: Cake;
}
