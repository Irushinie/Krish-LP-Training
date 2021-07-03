import { Injectable } from '@nestjs/common';
import { v1 as uuid } from 'uuid';
import { PetCreateDto } from '../dto/PetCreate.dto';
import { PetSearchDto } from '../dto/PetSearch.dto';
import { PetUpdateDto } from '../dto/PetUpdate.dto';
import { Pet} from '../schemas/Pet.schema';
import { PetRepository } from '../repository/Pet.repository';


@Injectable()
export class PetsService {
    constructor(private petRepository: PetRepository) { }

    async getAll(): Promise<Pet[]> {
        return await this.petRepository.findAll();
    }

    async create(petCreateDto: PetCreateDto): Promise<Pet> {
        return await this.petRepository.create(petCreateDto);
    }
    // petSearch(petSearchDto: PetSearchDto) {

    //     console.log(petSearchDto)
    //     const { dname } = petSearchDto;
    //     let pets = this.getAllPets();

    //     if (dname) {
    //         pets = pets.filter(pet => pet.name.includes(dname) || pet.ownerName.includes(dname))
    //     }
    //     return pets;
    // }

    // getPetById(pid: number): Pet {
    //     const pets = this.getAllPets();
    //     return pets.find(pet => pet.pid == pid);
    // }

    // updatePet(petupdatedto: PetUpdateDto): Pet {

    //     const { pid, petage } = petupdatedto;
    //     let pet = this.getPetById(pid)
    //     pet.age = petage;
    //     return pet;
    // }
    // deletePet(pid: number):boolean{
    //     let pets = this.getAllPets();
    //     this.pets=pets.filter(pet=> pet.pid !=pid)
    //     return (pets.length !=this.pets.length); 
    // }

}




