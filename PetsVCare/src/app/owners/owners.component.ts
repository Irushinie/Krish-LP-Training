import { Component, OnInit } from '@angular/core';
import owners from './data/owners.json';



@Component({
  selector: 'em-owners',
  templateUrl: './owners.component.html',
  styleUrls: ['./owners.component.scss']
})
export class OwnersComponent implements OnInit {

  

  title: string = 'PetsVCare Animal Clinic'
  owners: any[] = owners;
  filteredOwners: any[] = owners;
  showIcon: boolean = false;
  private _firstNameFilter: string = ''


  set firstNameFilter(value: string) {

    this._firstNameFilter = value;
    this.filterByName();

  }

  get firstNameFilter(): string {
    return this._firstNameFilter;
  } 

  constructor() {

  }

  ngOnInit(): void {
  }

  onGet(){
    return this.owners;
  }
  toggleIcon() {
    this.showIcon = !this.showIcon;
  }
  filterByName() {
    this.filteredOwners = this.owners.filter(owner => owner.firstName.includes(this.firstNameFilter))
  }
  delete(id: string){
    for(let i = 0; i < this.owners.length; ++i){
      if (this.owners[i].id === id) {
          this.owners.splice(i,1);
      }
    }
}


  
}
