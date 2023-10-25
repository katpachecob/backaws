import { IsNotEmpty, IsString, MinLength } from "class-validator";


export class LoginUserDto {
    @IsString()
    @IsNotEmpty()
    @MinLength(1)
    password: string;

    @IsString()
    @IsNotEmpty()
    email: string

}
