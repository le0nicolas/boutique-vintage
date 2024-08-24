import { Module, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FeaturesModule } from './features.modules';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from './authentication/JwtAuthGuard';
import { ExcludeAuthMiddleware } from './middlewares/ExcludeAuthMiddleware';
import { AuthModule } from './authentication/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '38919650',
      database: 'boutique_db',
      autoLoadEntities: true,
      synchronize: true,
      logging: true,
    }),
    FeaturesModule
  ]
})

export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(ExcludeAuthMiddleware)
      .forRoutes({ path: '*', method: RequestMethod.ALL }); // Aplica el middleware a todas las rutas
  }
}
