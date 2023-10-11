import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})


export class SearchComponent {
  searchText: string = '';

  @Output()
  searchTextChanged: EventEmitter<string> = new EventEmitter<string>();

  searchCake() {
    this.searchTextChanged.emit(this.searchText);
  }
  
  deleteCake(){
    this.searchText ="";
    this.searchTextChanged.emit(this.searchText);
  }
}
