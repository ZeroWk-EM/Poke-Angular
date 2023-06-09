import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.css']
})
export class PokemonCardComponent {
  @Input() name: string = "";
  @Input() types: string = "";
  @Input() weight: number = 0;
  @Input() img: string = "";
}
