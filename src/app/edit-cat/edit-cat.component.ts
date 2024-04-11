import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { AnimalDataService } from '../animal-data.service';
import { Animal } from '../animal';

@Component({
  selector: 'app-edit-cat',
  templateUrl: './edit-cat.component.html',
  styleUrls: ['./edit-cat.component.css']
})
export class EditCatComponent implements OnInit {
  cat: Animal = {
    name: '',
    age: '',
    breed: '',
    gender: '',
    img: '',
    id: 2
  };
  id!: number; 

  @Output() editCat = new EventEmitter<Animal>();

  constructor(private route: ActivatedRoute,
              private animalData: AnimalDataService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => 
    this.id = +params.get('id')!);

   this.animalData.getCatData().subscribe((cats: Animal[]) => {
    cats.filter((cat: Animal) => {
        if (cat.id == this.id) {
          this.cat = cat
        }
    });
});

  }
  saveChanges(cat:Animal) {
    this.animalData.editCat(cat).subscribe()
  }

}
