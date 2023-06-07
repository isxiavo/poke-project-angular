import { Component, Input, OnInit } from '@angular/core';
import { PokemonType } from 'src/app/model/PokemonType';
import pokemonsData from '../../../../data/pokemonsData.json'

@Component({
  selector: 'app-poke-detail',
  templateUrl: './poke-detail.component.html',
  styleUrls: ['./poke-detail.component.css']
})
export class PokeDetailComponent implements OnInit {

  @Input() pokemon: PokemonType | undefined;
  thumbBgStyle = {};

  constructor() {
    this.pokemon = undefined;
  }
  ngOnInit(): void {
    this.thumbBgStyle = {
      'backgroundColor': pokemonsData.lightColors[
        this.pokemon!.types[0].type.name as keyof typeof pokemonsData.lightColors
      ]
    }
  }
}
