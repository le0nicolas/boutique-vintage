import { IsOptional, IsNumber, IsString, Min } from 'class-validator';

export class UpdateProductDto {
  @IsOptional()
  @IsString()
  readonly nombre?: string;

  @IsOptional()
  @IsString()
  readonly descripcion?: string;

  @IsOptional()
  @IsNumber()
  @Min(0)
  readonly precio?: number;

  @IsOptional()
  @IsNumber()
  @Min(0)
  readonly stock?: number;

  @IsOptional()
  @IsNumber()
  readonly category_id?: number;
}
