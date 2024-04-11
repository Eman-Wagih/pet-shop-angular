import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Output() searchResualt = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }
   
  onSubmit(event: any) {
    this.searchResualt.emit(event.target.search.value);
 }
}
