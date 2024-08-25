import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Product])],
  //controllers: [UserController],
 // providers: [UserService],
  //exports: [UserService],
})
export class ProductModule {}