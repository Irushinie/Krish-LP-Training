import { Body, Controller, Delete, Get, HttpCode, NotFoundException, Param, Post, Put, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { OwnerCreateDto } from './dto/OwnerCreate.dto';
import { OwnersService } from './service/owners.service';
import { ownerSearchDto} from './dto/OwnerSearch.dto';
import { OwnerUpdateDto } from './dto/OwnerUpdate.dto';
import { Owner } from './schemas/Owner.schema';

@Controller('owners')
export class OwnersController {

    constructor(private ownerService: OwnersService) {

    }

    @Get()
    async getAllOwners(@Query() param: ownerSearchDto): Promise<Owner[]>{
        // if (Object.keys(param).length) {
        //     return this.ownerService.ownerSearch(param)

        // } else {
        //     return this.ownerService.getAllOwners()
        // }
        return await this.ownerService.getAll();
    }

    @Post()
    @UsePipes(ValidationPipe)
    createOwners(@Body() ownerCreateDto: OwnerCreateDto ):Promise<Owner>{

        return this.ownerService.create(ownerCreateDto)

    }

    // @Get('/:id')
    // getEmployeeById(@Param('id') id: number) {
    //     return this.ownerService.getOwnerById(id);

    // }

    // @Put('/:id/city')
    // updateOwner(@Param('id') id: number, @Body() ownerUpdateDto: OwnerUpdateDto) {

    //     ownerUpdateDto.id = id;
    //     return this.ownerService.updateOwner(ownerUpdateDto)

    // }

    // @Delete('/:id')
    // @HttpCode(204)
    // deleteOwner(@Param('id') id: number) {
    //     if (this.ownerService.deleteOwner(id)) {
    //         throw new NotFoundException('Owner Does not exist ')
    //     }

    // }

}
