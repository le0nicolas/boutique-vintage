import { IsString, IsInt, Min, MaxLength } from 'class-validator';

export class CreateUserDto {
  @IsString()
  readonly nombre: string;

  @IsString()
  readonly apellido: string;

  @IsString()
  readonly email: string;

  @IsString()
  @Min(6, { message: 'La contraseña tiene que tener más de 6 caracteres' })
  readonly password: string;
}