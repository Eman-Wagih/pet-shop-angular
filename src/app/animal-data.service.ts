import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Animal } from './animal';

const httpOptions: object = {
  Headers: new HttpHeaders({
    'Content-Type': 'application/josn'
  })}
@Injectable({
  providedIn: 'root'
})
export class AnimalDataService {
  animal: Animal[] = []
  apiUrl = 'http://localhost:3000'
  
constructor(private http: HttpClient) { }
  getCatData(): Observable<Animal[]> {
    return this.http.get<Animal[]>(`${this.apiUrl}/cats`);
 }
 getDogData(): Observable<Animal[]> {
  return this.http.get<Animal[]>(`${this.apiUrl}/dogs`);
}

addCat(cat: Animal) {
  return this.http.post<Animal>(`${this.apiUrl}/cats`, cat, httpOptions);
 }

 editCat(cat: Animal) {
  return this.http.put<Animal>(`${this.apiUrl}/cats/${cat.id}`, cat, httpOptions);

 }

 addDog(dog: Animal) {
  return this.http.post<Animal>(`${this.apiUrl}/dogs`, dog, httpOptions);
 }

 deleteCat(catId: number): Observable<void> {
  const url = `${this.apiUrl}/cats/${catId}`; 
  return this.http.delete<void>(url);
}

editCatDetails (catId :Animal) {
  return this.http.post<Animal>(`${this.apiUrl}/cats/${catId}`, catId, httpOptions);
}
}
