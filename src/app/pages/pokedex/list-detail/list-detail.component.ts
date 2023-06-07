import { Component, Input } from '@angular/core';
import { PokemonType } from 'src/app/model/PokemonType';

@Component({
  selector: 'app-list-detail',
  templateUrl: './list-detail.component.html',
  styleUrls: ['./list-detail.component.css']
})
export class ListDetailComponent {

  @Input() pokemonsTotal: PokemonType[];
  private limit: number;
  private offset: number;
  pokemonsCurrent: PokemonType[];

  loadMore() {
    this.pokemonsTotal.slice(this.offset, this.offset + this.limit)
    .map((poke) => {this.pokemonsCurrent.push(poke)})
    
    this.offset += this.limit;
  }

  constructor() {
    this.pokemonsTotal = [];
    this.limit = 10;
    this.offset = 0;
    this.pokemonsCurrent = [];
  }

}
