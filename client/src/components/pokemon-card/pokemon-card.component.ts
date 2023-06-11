import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Pokemon } from 'src/models/pokedex';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.css'],
})
export class PokemonCardComponent {
  @Input() name: string = '';
  @Input() types: string = '';
  @Input() weight: number = 0;
  @Input() img: string = '';

  @Output() selectPokemon = new EventEmitter<Pokemon>();

  fun = () => {
    this.selectPokemon.emit({
      name: this.name,
      types: this.types,
      weight: this.weight,
      front_default: this.img,
    });
  };
}
