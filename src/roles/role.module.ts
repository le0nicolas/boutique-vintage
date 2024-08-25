import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Role } from './entities/role.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Role])],
  //controllers: [UserController],
 // providers: [UserService],
  //exports: [UserService],
})
export class RoleModule {}