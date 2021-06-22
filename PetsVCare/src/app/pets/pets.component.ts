import { Component, OnInit } from '@angular/core';
import pets from '../pets/data/pets.json';

@Component({
  selector: 'em-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.scss']
})
export class PetsComponent implements OnInit {

  title: string = 'PetsVCare Animal Clinic'
  pets: any[] = pets;
  filteredPets: any[] = pets;

  private _firstPNameFilter: string = '';

  set firstPNameFilter(value: string) {

    this._firstPNameFilter = value;
    this.filterByPName();

  }

  get firstPNameFilter(): string {
    return this._firstPNameFilter;
  }
  constructor() { }

  ngOnInit(): void {
  }
  onGet(){
    return this.pets;
  }
  filterByPName() {
    this.filteredPets = this.pets.filter(pet=>pet.name.includes(this.firstPNameFilter))
  }
  delete(pid: string){
    for(let i = 0; i < this.pets.length; ++i){
      if (this.pets[i].pid === pid) {
          this.pets.splice(i,1);
      }
    }
}
  
}
