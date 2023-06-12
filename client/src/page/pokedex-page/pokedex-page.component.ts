import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { elementAt } from 'rxjs';
import { Pokemon } from 'src/models/pokedex';
import { PokedexService } from 'src/service/pokedex.service';

@Component({
  selector: 'app-pokedex-page',
  templateUrl: './pokedex-page.component.html',
  styleUrls: ['./pokedex-page.component.css'],
})
export class PokedexPageComponent implements OnInit {
  currentPage = 1;
  pokemons: Pokemon[] = [];
  totalPage: number = 0;

  selectedPokemon: Pokemon | undefined;
  searchForm!: FormGroup ;

  constructor(private pokedexService: PokedexService) {}

  ngOnInit(): void {
    this.getPokemon();
    this.searchForm = new FormGroup({
      pokemonName: new FormControl('', Validators.required),
    })
  }

  getPokemon = () => {
    this.pokedexService.createData(this.currentPage).subscribe({
      next: ({ results, totalPage }) => {
        this.pokemons = results;
        this.totalPage = totalPage;
      },
      error: (error) => {
        console.log(error);
      },
    });
  };

  getCurrentPage= ()=>{
    return this.totalPage;
  }

  setCurrentPage = (page: number) => {
    this.currentPage = page;
    this.getPokemon();
    window.scroll({ 
      top: 0, 
      left: 0, 
      behavior: 'smooth' 
});
  };

  searchPokemon() {
    const pokemonToSearch=String(this.searchForm.value.pokemonName).toLowerCase();
    this.pokedexService.searchPokemon(pokemonToSearch).subscribe({
      next: (response) => {
        this.pokemons = response.results;
        this.totalPage = response.totalPage;
        this.currentPage = 1
      },
      error: (error) => {
        
      },
    });
  }
}
