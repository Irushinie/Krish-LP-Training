import { Injectable } from '@angular/core';
import pets from '../../pets/data/pets.json';
import { Pet } from '../Pets.model';



@Injectable({
  providedIn: 'root'
})
export class PetService {
  pets: Pet[] = pets;

  constructor() { }

  onGet() {
    return this.pets;
  }

  onGetPet(pid: Number) {
    return this.pets.find(ob => ob.pid == pid);
  }

  onAdd(pet: Pet) {
    this.pets.push(pet);
  }
}