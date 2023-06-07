import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-toolsbar',
  templateUrl: './toolsbar.component.html',
  styleUrls: ['./toolsbar.component.css']
})


export class ToolsbarComponent {

  @Output() listTypeChange;
  sortingOpen: boolean;

  changeListType(listType: string) {
    this.listTypeChange.emit(listType)
    console.log(listType)
  }

  sortingOpenClose () {
    this.sortingOpen = !this.sortingOpen
  }

  constructor() {
    this.listTypeChange = new EventEmitter<string>();
    this.sortingOpen = false;
  }
}
