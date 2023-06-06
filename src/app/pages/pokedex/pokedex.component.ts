import { AfterViewInit, Component } from '@angular/core';
import { PokemonType } from 'src/app/model/PokemonType';
import { SpeciesType } from 'src/app/model/SpeciesType';
import { FetchPokemonsService } from 'src/app/services/fetch-pokemons.service';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css']
})
export class PokedexComponent implements AfterViewInit {
  
  pokemons: PokemonType[] = [];

  getPokemons(limit: number, offset: number) {
    this.pokemons =  this.service.getPokemons(limit, offset)
    
  }

  
  constructor(private service: FetchPokemonsService) {
    this.getPokemons(50,0)
  }
  ngAfterViewInit(): void {
    console.log(this.pokemons)
  }
}