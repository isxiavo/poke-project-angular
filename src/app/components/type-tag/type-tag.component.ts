import { Component, Input, AfterViewInit } from '@angular/core';
import data from '../../data/pokemonsData.json';

@Component({
  selector: 'app-type-tag',
  templateUrl: './type-tag.component.html',
  styleUrls: ['./type-tag.component.css']
})
export class TypeTagComponent implements AfterViewInit {

  @Input() name: string = '';
  style = {}

  constructor() {}

  ngAfterViewInit(): void {
    this.style = {'backgroundColor': data.colors[this.name as keyof typeof data.colors]}
  }
}
