import { IsString, IsInt, Min, MaxLength } from 'class-validator';

export class LoginDto {

  @IsString()
  readonly email: string;

  @IsString()
  readonly password: string;
}