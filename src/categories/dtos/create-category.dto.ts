import { IsString, IsBoolean } from 'class-validator';

export class CreateCategoryDto {
    @IsString()
    readonly nombre: string;

    @IsString()
    readonly descripcion: string;
}