import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Pet } from '../../Pets.model';
import { PetService } from '../../services/pets.services';
import { Router } from '@angular/router';


@Component({
  selector: 'em-editpet',
  templateUrl: './editpet.component.html',
  styleUrls: ['./editpet.component.scss']
})
export class EditpetComponent implements OnInit {

  

  constructor(public petService: PetService, public router: Router) { }

  pid: any;
  name: any;
  type: any;
  breed: any;
  age: any;
  ownerName: any;
  


  ngOnInit(): void {
  }


  onSubmit(form:NgForm){
   
   console.log(form.value);

   let pets: Pet = {

    pid: this.petService.onGet().length,
    name: form.value.name,
    type: form.value.type,
    breed: form.value.breed,
    age: form.value.age,
    ownerName: form.value.ownerName

  }

  this.petService.onAdd(pets);
  this.router.navigateByUrl('pets');
}
  
  } 

