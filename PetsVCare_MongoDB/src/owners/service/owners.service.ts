import { Injectable } from '@nestjs/common';
import { v1 as uuid } from 'uuid'
import { Owner } from '../schemas/Owner.schema';
import { OwnerCreateDto } from '../dto/OwnerCreate.dto';
//import { OwnerSearchDto } from '../dto/OwnerSearch.dto';
import { OwnerUpdateDto } from '../dto/OwnerUpdate.dto';
import { OwnerRepository } from '../repository/Owner.repository';

@Injectable()
export class OwnersService {


    constructor(private ownerRepository: OwnerRepository) { }

    async getAll(): Promise<Owner[]> {
        return await this.ownerRepository.findAll();
    }

    async create(ownerCreateDto: OwnerCreateDto): Promise<Owner> {
        return await this.ownerRepository.create(ownerCreateDto);
    }


    // ownerSearch(ownerSearchDto: OwnerSearchDto) {

    //     console.log(ownerSearchDto)
    //     const { name } = ownerSearchDto;
    //     let owners = this.getAllOwners();

    //     if (name) {
    //         owners = owners.filter(owner => owner.firstName.includes(name) || owner.lastName.includes(name))
    //     }
    //     return owners;
    // }

    // getOwnerById(id: number): Owner {
    //     const owners = this.getAllOwners();
    //     return owners.find(owner => owner.id == id);
    // }

    // updateOwner(ownerupdatedto: OwnerUpdateDto): Owner {

    //     const { id, city } = ownerupdatedto;
    //     let owner = this.getOwnerById(id)
    //     owner.address = city;
    //     return owner;
    // }
    // deleteOwner(id: number):boolean{
    //     let owners = this.getAllOwners();
    //     this.owners=owners.filter(owner=> owner.id !=id)
    //     return (owners.length !=this.owners.length); 
    // }

}
