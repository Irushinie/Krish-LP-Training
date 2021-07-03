import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { OwnersController } from './owners.controller';
import { OwnersService } from './service/owners.service';
import { Owner, OwnerSchema } from './schemas/Owner.schema';
import { OwnerRepository } from './repository/Owner.repository';

@Module({
  imports: [MongooseModule.forFeature([
    { name: Owner.name, schema: OwnerSchema }
    
  ])],
  controllers: [OwnersController],
  providers: [OwnersService, OwnerRepository]
})
export class OwnersModule { }
