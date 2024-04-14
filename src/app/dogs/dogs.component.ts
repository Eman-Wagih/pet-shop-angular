import { Component, OnInit } from '@angular/core';
import { Animal } from '../animal';
import { AnimalDataService } from '../animal-data.service';

@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.css']
})
export class DogsComponent implements OnInit {
  dogs : Animal[] =[];
  constructor(private animalData:AnimalDataService) { }

  ngOnInit(): void {
    this.animalData.getDogData().subscribe((dogs) => this.dogs = dogs)
  }

  deleteTheDog(dog: Animal) {
    this.animalData.deleteDog(dog.id).subscribe();
   return this.dogs = this.dogs.filter(dogyy => dogyy !== dog);
 }

 filterBySearch(event: string) {
     this.animalData.getDogData().subscribe(dogs => {
     const filteredDogs = dogs.filter(dog => Object.values(dog).includes(event));
     this.dogs = filteredDogs
   });
}

}
