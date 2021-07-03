import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { PetCreateDto } from "../dto/PetCreate.dto";
import { Pet, PetDocument } from "../schemas/Pet.schema";


@Injectable()
export class PetRepository {

    constructor(@InjectModel(Pet.name) private petModel: Model<PetDocument>) {

    }

    async create(createPetDto: PetCreateDto): Promise<Pet> {

        let newPet = new this.petModel(createPetDto);
        return await newPet.save();

    }

    async findAll():Promise<Pet[]>{
        return await this.petModel.find();

    }
}