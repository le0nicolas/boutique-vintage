import { IsNumber, IsString, Min } from 'class-validator';

export class CreateProductDto {
  @IsString()
  readonly nombre: string;

  @IsString()
  readonly descripcion: string;

  @IsNumber()
  @Min(0)
  readonly precio: number;

  @IsNumber()
  @Min(0)
  readonly stock: number;

  @IsNumber()
  readonly category_id: number;
}
