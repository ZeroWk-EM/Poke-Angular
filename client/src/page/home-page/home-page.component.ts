import { Component } from '@angular/core';
import { Section } from 'src/models/section';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {

  pokedex: Section = {
    icon: "./../../assets/img/pokedex-icon.png",
    title: "Pokedex",
    description: "The Pokédex is an electronic device designed to catalog and provide information regarding the various species of Pokémon. The name Pokédex is a portmanteau of Pokémon and index. In the video games, whenever a Pokémon is first caught, its height, weight, species type, and a short description will be added to a player's Pokédex. Each region has its own Pokédex, which differs in appearance, species of Pokémon catalogued, and functions. In Pokémon Legends: Arceus, which takes place long before any other Pokémon games, players are tasked with assembling the first-ever Pokédex.",
    button: "Go Pokedex",
    reverseRow: false,
    route: "pokedex"
  }

  favorites: Section = {
    icon: "./../../assets/img/star.png",
    title: "Favorites",
    description: "In this section you can save your favorite pokemon.",
    button: "Go Favorites",
    reverseRow: true,
    route: "favorites"
  } 

}
