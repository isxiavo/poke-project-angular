import { Component, Input, AfterViewInit } from '@angular/core';
import { PokemonType } from 'src/app/model/PokemonType';
import data from '../../../../data/pokemonsData.json'

@Component({
  selector: 'app-poke-simple',
  templateUrl: './poke-simple.component.html',
  styleUrls: ['./poke-simple.component.css']
})
export class PokeSimpleComponent implements AfterViewInit {

  @Input() pokemon: PokemonType | undefined;
  style = {};

  constructor() {
    this.pokemon = undefined
  }
  ngAfterViewInit(): void {
    this.style = {
      'backgroundColor' : 
        data.lightColors[this.pokemon!.types[0].type.name as keyof typeof data.lightColors]
    } 
  }

}