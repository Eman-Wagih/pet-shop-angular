import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Animal } from '../animal';
import { AnimalDataService } from '../animal-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adoption',
  templateUrl: './adoption.component.html',
  styleUrls: ['./adoption.component.css']
})
export class AdoptionComponent implements OnInit {
  animal !: Animal;
  adoptionForm: FormGroup; 
  errorInForm: string = 'please fill the form'
  formInvalid: boolean = false;

  constructor(private fb :FormBuilder,
              private animalService: AnimalDataService,
              private router: Router) { 
    this.adoptionForm = this.fb.group({
      animalType: ['', Validators.required],
      name:['', Validators.required],
      age: ['', Validators.required],
      breed: ['', Validators.required],
      vaccinated: ['', Validators.required],
      gender: ['', Validators.required],
      img: ['', Validators.required],
    })
  }
  
  
  ngOnInit(): void {

    this.animalService.getCatData().subscribe(cats => {
      const lastCatId = Number(cats[cats.length - 1].id);
    console.log(lastCatId)
    });
    
  }

  onSubmit(animal: Animal) {
    console.log('submitted', this.adoptionForm.value);
    this.animal = this.adoptionForm.value;
  
    if (this.adoptionForm.valid) {
      const animalType = this.adoptionForm.get('animalType')?.value;
      if (animalType === 'Cat') {
        this.animalService.getCatData().subscribe(cats => {
          const lastCat = Number(cats[cats.length - 1].id);

          if (lastCat) {
            animal.id = lastCat + 1; 
            this.animalService.addCat(animal).subscribe(() => {
              this.router.navigate(['/cats']);
            });
          } else {
            animal.id = 1;
          }
        });
        
      } else if (animalType === 'Dog') {
        this.animalService.getCatData().subscribe(dogs => {
          const lastDog = Number(dogs[dogs.length - 1].id);

          if (lastDog) {
            animal.id = lastDog + 1; 
            this.animalService.addDog(animal).subscribe(() => {
              this.router.navigate(['/dogs']);
            });
          } else {
            animal.id = 1;
          }
        });
      } 
    }
  }
  
   }

//    checkForm() {
//     this.formInvalid = this.adoptionForm.invalid;
//     return this.formInvalid;
//  }
