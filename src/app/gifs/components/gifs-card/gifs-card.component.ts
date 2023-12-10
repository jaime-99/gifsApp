import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-gifs-card',
  
  templateUrl: './gifs-card.component.html',
  styleUrls: ['./gifs-card.component.css'],
})
export class GifsCardComponent { 

@Input() gif:any


}
