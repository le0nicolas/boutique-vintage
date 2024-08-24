import { Injectable, UnauthorizedException } from '@nestjs/common';
import { LoginDto } from './dtos/login.dto';
import * as bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../users/user.service';
import { User } from 'src/users/entities/user.entity';

@Injectable()
export class AuthService {
    constructor(
        private readonly usersService: UserService,
        private readonly jwtService: JwtService,
    ) {}

    async login(loginDto: LoginDto): Promise<{ token: string }> {
        const { email, password } = loginDto;

        const user : User = await this.usersService.emailExists(email);
        if (!user) {
          throw new UnauthorizedException('Email o contraseña inválido.');
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
          throw new UnauthorizedException('Email o contraseña inválido');
        }
    
        // Crear JWT
        const payload = { id: user.id, username: user.nombre, apelido: user.apellido };
        const token = this.jwtService.sign(payload);
    
        return { token };
    }
}
