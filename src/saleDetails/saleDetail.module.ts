import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SaleDetail } from './entities/SaleDetail.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SaleDetail])],
  //controllers: [UserController],
 // providers: [UserService],
  //exports: [UserService],
})
export class SaleDetailModule {}