import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Owner } from '../Owners.model';
import { OwnerService } from '../services/owner.services';
import { Router } from '@angular/router';


@Component({
  selector: 'em-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  
  constructor(public ownerService: OwnerService, public router: Router) { }

  id: any;
  firstName:any;
  lastName:any;
  petName:any;
  address:any;
  phoneNumber:any;
  


  ngOnInit(): void {
  }


  onSubmit(form:NgForm){
   
   console.log(form.value);

   let owners: Owner = {

    id: this.ownerService.onGet().length,
    firstName: form.value.firstName,
    lastName: form.value.lastName,
    petName: form.value.petName,
    address: form.value.address,
    phoneNumber: form.value.phoneNumber

  }

  this.ownerService.onAdd(owners);
  this.router.navigateByUrl('owners');
}
  
  } 

  


