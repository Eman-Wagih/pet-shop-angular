import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
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

  constructor(private route: ActivatedRoute,
              private animalData: AnimalDataService,
              private router:Router
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
    this.animalData.editCat(cat).subscribe();
    this.router.navigate(['/cats'])
  }

}
