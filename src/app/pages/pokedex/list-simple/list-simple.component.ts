import { Component, Input } from '@angular/core';
import { PokemonType } from 'src/app/model/PokemonType';

@Component({
  selector: 'app-list-simple',
  templateUrl: './list-simple.component.html',
  styleUrls: ['./list-simple.component.css']
})
export class ListSimpleComponent {
  @Input() pokemons: PokemonType[];

  constructor() {
    this.pokemons = []
  }
}