import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Sale } from './entities/sale.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Sale])],
  //controllers: [UserController],
 // providers: [UserService],
  //exports: [UserService],
})
export class SaleModule {}