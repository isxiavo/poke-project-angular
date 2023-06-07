import { Component } from '@angular/core';
import { PokemonType } from 'src/app/model/PokemonType';
import { SpeciesType } from 'src/app/model/SpeciesType';
import { FetchPokemonsService } from 'src/app/services/fetch-pokemons.service';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css']
})
export class PokedexComponent {
  
  pokemons: PokemonType[];
  currentListType: string;

  changeListType($event:string) {
    this.currentListType = $event;
  }

  constructor(private service: FetchPokemonsService) {
    this.pokemons = this.service.getPokemons(50, 0)
    this.currentListType = 'list-simple'
  }
}