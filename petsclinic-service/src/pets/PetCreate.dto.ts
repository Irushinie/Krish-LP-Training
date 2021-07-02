import { IsNotEmpty } from "class-validator";

export class PetCreateDto{

    pid:number
    @IsNotEmpty()
    name:string
    @IsNotEmpty()
    type:string
    breed:string
    age:number
    ownerName:string
   
}