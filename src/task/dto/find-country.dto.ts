import { IsBoolean, IsNotEmpty, IsString, IsOptional } from 'class-validator'

export class FindCountryDto {
    @IsString()
    @IsNotEmpty()
    country: string;

    @IsString()
    date:string
}