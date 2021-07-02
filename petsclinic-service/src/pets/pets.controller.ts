import { Body, Controller, Delete, Get, HttpCode, NotFoundException, Param, Post, Put, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { PetCreateDto } from './PetCreate.dto';
import { PetsService } from './pets.service';
import { PetSearchDto } from './PetSearch.dto';
import { PetUpdateDto } from './PetUpdate.dto';



@Controller('pets')
export class PetsController {


    constructor(private petService: PetsService) {

    }

    @Get()
    getAllPets(@Query() param: PetSearchDto) {
        if (Object.keys(param).length) {
            return this.petService.petSearch(param)

        } else {
            return this.petService.getAllPets()
        }
    }
    @Post()
    @UsePipes(ValidationPipe)
    createPets(@Body() petCreateDto: PetCreateDto) {

        return this.petService.createPet(petCreateDto)

    }

    @Get('/:pid')
    getEmployeeById(@Param('pid') pid: number) {
        return this.petService.getPetById(pid);

    }

    @Put('/:pid/petage')
    updatePet(@Param('pid') pid: number, @Body() petUpdateDto: PetUpdateDto) {

        petUpdateDto.pid = pid;
        return this.petService.updatePet(petUpdateDto)

    }

    @Delete('/:pid')
    @HttpCode(204)
    deletePet(@Param('pid') pid: number) {
        if (this.petService.deletePet(pid)) {
            throw new NotFoundException('Pet Does not exist ')
        }

    }

}
