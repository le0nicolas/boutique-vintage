import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class ExcludeAuthMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log("en el exclude mid")

    // Ignora rutas específicas
    if (req.path === '/auth/login') {
      console.log("en el path")
      return next();
    }

    // Llama al siguiente middleware o guard si no se ignora la ruta
    next();
  }
}
