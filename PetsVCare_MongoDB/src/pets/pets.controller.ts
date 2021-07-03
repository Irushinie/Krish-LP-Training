import { Body, Controller, Delete, Get, HttpCode, NotFoundException, Param, Post, Put, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { PetCreateDto } from './dto/PetCreate.dto';
import { PetsService } from './service/pets.service';
import { PetSearchDto } from './dto/PetSearch.dto';
import { PetUpdateDto } from './dto/PetUpdate.dto';
import { Pet } from './schemas/Pet.schema';



@Controller('pets')
export class PetsController {


    constructor(private petService: PetsService) {

    }

    @Get()
    async getAllPets(@Query() param: PetSearchDto): Promise<Pet[]>{
        // if (Object.keys(param).length) {
        //     return this.petService.petSearch(param)

        // } else {
        //     return this.petService.getAllPets()
        // }
        return await this.petService.getAll();


    }
    @Post()
    @UsePipes(ValidationPipe)
    createPets(@Body() petCreateDto: PetCreateDto ):Promise<Pet>{

        return this.petService.create(petCreateDto)

    }

    // @Get('/:pid')
    // getEmployeeById(@Param('pid') pid: number) {
    //     return this.petService.getPetById(pid);

    // }

    // @Put('/:pid/petage')
    // updatePet(@Param('pid') pid: number, @Body() petUpdateDto: PetUpdateDto) {

    //     petUpdateDto.pid = pid;
    //     return this.petService.updatePet(petUpdateDto)

    // }

    // @Delete('/:pid')
    // @HttpCode(204)
    // deletePet(@Param('pid') pid: number) {
    //     if (this.petService.deletePet(pid)) {
    //         throw new NotFoundException('Pet Does not exist ')
    //     }

    // }

}
