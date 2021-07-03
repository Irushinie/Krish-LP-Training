import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document} from "mongoose";


export type PetDocument = Pet & Document;

@Schema()
export class Pet {

    @Prop()
    pid: number
    @Prop({required:true})
    name: string
    @Prop({required:true})
    type: string
    @Prop()
    breed: string
    @Prop()
    age: number
    @Prop()
    ownerName: string
    

}

export const PetSchema = SchemaFactory.createForClass(Pet);
