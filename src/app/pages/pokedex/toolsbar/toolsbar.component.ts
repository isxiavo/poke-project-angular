import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-toolsbar',
  templateUrl: './toolsbar.component.html',
  styleUrls: ['./toolsbar.component.css']
})


export class ToolsbarComponent {

  @Output() listTypeChange;
  sortingOpen: boolean;

  changeListType(listType: string): void {
    this.listTypeChange.emit(listType)
    console.log(listType)
  }

  toggleSortMenu(): void {
    this.sortingOpen = !this.sortingOpen;
  }

  clickedOutside(): void {
    this.sortingOpen = false;
  }

  constructor() {
    this.listTypeChange = new EventEmitter<string>();
    this.sortingOpen = false;
  }
}
