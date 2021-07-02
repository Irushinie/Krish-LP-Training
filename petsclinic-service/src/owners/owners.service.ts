import { Injectable } from '@nestjs/common';
import { v1 as uuid } from 'uuid'
import { Owner } from './Owner.model';
import { OwnerCreateDto } from './OwnerCreate.dto';
import { OwnerSearchDto } from './OwnerSearch.dto';
import { OwnerUpdateDto } from './OwnerUpdate.dto';

@Injectable()
export class OwnersService {


    private owners: Owner[] = []


    getAllOwners() {
        return this.owners;
    }
    createOwner(ownerCreateDto: OwnerCreateDto) {

        const {
            firstName,
            lastName,
            petName,
            address,
            phoneNumber
        }=ownerCreateDto

        const owner = {
            id: uuid(),
            firstName,
            lastName,
            petName,
            address,
            phoneNumber
           
        }

        this.owners.push(owner)
        return owner;
    }
    ownerSearch(ownerSearchDto: OwnerSearchDto) {

        console.log(ownerSearchDto)
        const { name } = ownerSearchDto;
        let owners = this.getAllOwners();

        if (name) {
            owners = owners.filter(owner => owner.firstName.includes(name) || owner.lastName.includes(name))
        }
        return owners;
    }

    getOwnerById(id: number): Owner {
        const owners = this.getAllOwners();
        return owners.find(owner => owner.id == id);
    }

    updateOwner(ownerupdatedto: OwnerUpdateDto): Owner {

        const { id, city } = ownerupdatedto;
        let owner = this.getOwnerById(id)
        owner.address = city;
        return owner;
    }
    deleteOwner(id: number):boolean{
        let owners = this.getAllOwners();
        this.owners=owners.filter(owner=> owner.id !=id)
        return (owners.length !=this.owners.length); 
    }

}
