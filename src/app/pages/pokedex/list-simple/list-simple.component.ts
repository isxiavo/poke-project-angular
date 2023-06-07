import { Component, Input, AfterViewInit } from '@angular/core';
import { PokemonType } from 'src/app/model/PokemonType';

@Component({
  selector: 'app-list-simple',
  templateUrl: './list-simple.component.html',
  styleUrls: ['./list-simple.component.css']
})
export class ListSimpleComponent implements AfterViewInit{
  @Input() pokemonsTotal: PokemonType[];
  private limit: number;
  private offset: number;

  constructor() {
    this.pokemonsTotal = [];
    this.limit = 10;
    this.offset = 0;
  }

  ngAfterViewInit(): void {
      
  }
}