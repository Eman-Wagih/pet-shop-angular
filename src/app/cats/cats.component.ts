import { Component, OnInit } from '@angular/core';
import { Animal } from '../animal';
import { AnimalDataService } from '../animal-data.service';

@Component({
  selector: 'app-cats',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.css']
})
export class CatsComponent implements OnInit {
  cats : Animal[] =[];

  constructor(private animalData:AnimalDataService) { }

  ngOnInit() {
    this.animalData.getCatData().subscribe((cats) => this.cats = cats)
  }

  deleteTheCat(cat: Animal) {
     this.animalData.deleteCat(cat.id).subscribe();
    return this.cats = this.cats.filter(kitty => kitty !== cat);
  }

  filterBySearch(event: string) {
      this.animalData.getCatData().subscribe(cats => {
      const filteredCats = cats.filter(cat => Object.values(cat).includes(event));
      this.cats = filteredCats
    });
}

}


