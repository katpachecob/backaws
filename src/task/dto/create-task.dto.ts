import { IsBoolean, IsNotEmpty, IsString, IsOptional, IsInt } from 'class-validator'

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


  @IsOptional()
  list?: number;
}