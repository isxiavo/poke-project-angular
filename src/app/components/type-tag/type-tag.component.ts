import { Component, Input, OnInit } from '@angular/core';
import data from '../../data/pokemonsData.json';

@Component({
  selector: 'app-type-tag',
  templateUrl: './type-tag.component.html',
  styleUrls: ['./type-tag.component.css']
})
export class TypeTagComponent implements OnInit {

  @Input() name: string = '';
  style = {}

  constructor() {}

  ngOnInit(): void {
    this.style = {'backgroundColor': data.colors[this.name as keyof typeof data.colors]}
  }
}
