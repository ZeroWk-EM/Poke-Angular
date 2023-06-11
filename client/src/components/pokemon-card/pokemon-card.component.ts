import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Pokemon, Stats } from 'src/models/pokedex';

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
  @Input() stats: Stats[] = [{
    stats_name: 'pokemon',
    basic_stat: 0
  }];


  @Output() selectPokemon = new EventEmitter<Pokemon>();

  dataModal = () => {
    this.selectPokemon.emit({
      name: this.name,
      types: this.types,
      weight: this.weight,
      front_default: this.img,
      stats: this.stats
    });
  };
}
