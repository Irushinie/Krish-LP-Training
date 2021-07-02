import { IsNotEmpty } from "class-validator";

export class OwnerCreateDto{

    id:number
    @IsNotEmpty()
    firstName:string
    @IsNotEmpty()
    lastName:string
    petName:string
    address:string
    phoneNumber:number
   
}