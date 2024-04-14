import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Animal } from '../animal';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { AnimalDataService } from '../animal-data.service';

@Component({
  selector: 'app-edit-dog',
  templateUrl: './edit-dog.component.html',
  styleUrls: ['./edit-dog.component.css']
})
export class EditDogComponent implements OnInit {

  
  dog: Animal = {
    name: '',
    age: '',
    breed: '',
    gender: '',
    img: '',
    id: 2
  };
  id!: number; 

  constructor(private route: ActivatedRoute,
              private animalData: AnimalDataService,
              private router:Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => 
      this.id = +params.get('id')!);
  
     this.animalData.getDogData().subscribe((dogs: Animal[]) => {
      dogs.filter((dog: Animal) => {
          if (dog.id == this.id) {
            this.dog = dog
          }
      });
  });
  }

  saveChanges(dog:Animal) {
    this.animalData.editDog(dog).subscribe();
    this.router.navigate(['/dogs'])
  }

}
