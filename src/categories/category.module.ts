import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Category } from './entities/category.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Category])],
  //controllers: [UserController],
 // providers: [UserService],
  //exports: [UserService],
})
export class CategoryModule {}