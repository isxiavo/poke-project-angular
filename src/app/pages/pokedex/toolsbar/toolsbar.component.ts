import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-toolsbar',
  templateUrl: './toolsbar.component.html',
  styleUrls: ['./toolsbar.component.css']
})


export class ToolsbarComponent {

  @Output() listTypeChange = new EventEmitter<string>();

  changeListType(listType: string) {
    this.listTypeChange.emit(listType)
    console.log(listType)
  }

  constructor() {
    
  }
}
