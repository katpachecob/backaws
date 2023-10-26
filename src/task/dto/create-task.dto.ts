import { IsBoolean, IsNotEmpty, IsString, IsOptional } from 'class-validator'

export class CreateTaskDto {
    @IsString()
    @IsNotEmpty()
    title: string;

    @IsString()
    @IsOptional()
    description?: string;

    @IsBoolean()
    @IsOptional()
    status?: boolean
}