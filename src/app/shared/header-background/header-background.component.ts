import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header-background',
  templateUrl: './header-background.component.html',
  styleUrls: ['./header-background.component.css']
})
export class HeaderBackgroundComponent implements OnInit {
  @Input() imgSrc!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
