import { Module } from '@nestjs/common';
import { UserModule } from './users/user.module';
import { AuthModule } from './authentication/auth.module';

@Module({
  imports: [
    UserModule,
    AuthModule
  ],
})
export class FeaturesModule {}
