import { Body, Controller, Delete, Get, HttpCode, NotFoundException, Param, Post, Put, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { OwnerCreateDto } from './OwnerCreate.dto';
import { OwnersService } from './owners.service';
import { OwnerSearchDto } from './OwnerSearch.dto';
import { OwnerUpdateDto } from './OwnerUpdate.dto';

@Controller('owners')
export class OwnersController {

    constructor(private ownerService: OwnersService) {

    }

    @Get()
    getAllOwners(@Query() param: OwnerSearchDto) {
        if (Object.keys(param).length) {
            return this.ownerService.ownerSearch(param)

        } else {
            return this.ownerService.getAllOwners()
        }
    }

    @Post()
    @UsePipes(ValidationPipe)
    createOwners(@Body() ownerCreateDto: OwnerCreateDto) {

        return this.ownerService.createOwner(ownerCreateDto)

    }

    @Get('/:id')
    getEmployeeById(@Param('id') id: number) {
        return this.ownerService.getOwnerById(id);

    }

    @Put('/:id/city')
    updateOwner(@Param('id') id: number, @Body() ownerUpdateDto: OwnerUpdateDto) {

        ownerUpdateDto.id = id;
        return this.ownerService.updateOwner(ownerUpdateDto)

    }

    @Delete('/:id')
    @HttpCode(204)
    deleteOwner(@Param('id') id: number) {
        if (this.ownerService.deleteOwner(id)) {
            throw new NotFoundException('Owner Does not exist ')
        }

    }

}
