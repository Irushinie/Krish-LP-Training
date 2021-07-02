import { Injectable } from '@nestjs/common';
import { v1 as uuid } from 'uuid'
import { Pet } from './Pet.model';
import { PetCreateDto } from './PetCreate.dto';
import { PetSearchDto } from './PetSearch.dto';
import { PetUpdateDto } from './PetUpdate.dto';


@Injectable()
export class PetsService {
    private pets: Pet[] = []


    getAllPets() {
        return this.pets;
    }

    createPet(petCreateDto: PetCreateDto) {

        const {
            name,
            type,
            breed,
            age,
            ownerName
        }=petCreateDto

        const pet = {
            pid: uuid(),
            name,
            type,
            breed,
            age,
            ownerName
           
        }

        this.pets.push(pet)
        return pet;
    }

    petSearch(petSearchDto: PetSearchDto) {

        console.log(petSearchDto)
        const { dname } = petSearchDto;
        let pets = this.getAllPets();

        if (dname) {
            pets = pets.filter(pet => pet.name.includes(dname) || pet.ownerName.includes(dname))
        }
        return pets;
    }

    getPetById(pid: number): Pet {
        const pets = this.getAllPets();
        return pets.find(pet => pet.pid == pid);
    }

    updatePet(petupdatedto: PetUpdateDto): Pet {

        const { pid, petage } = petupdatedto;
        let pet = this.getPetById(pid)
        pet.age = petage;
        return pet;
    }
    deletePet(pid: number):boolean{
        let pets = this.getAllPets();
        this.pets=pets.filter(pet=> pet.pid !=pid)
        return (pets.length !=this.pets.length); 
    }

}




