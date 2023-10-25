import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { ForgotUserDto } from 'src/users/dto/forgotpassword-user';
import { LoginUserDto } from 'src/users/dto/login-user';
import { UserService } from 'src/users/user.service';
export declare class AuthService {
    private readonly usersService;
    private readonly jwtService;
    constructor(usersService: UserService, jwtService: JwtService);
    register({ fullname, email, password }: CreateUserDto): Promise<{
        fullname: string;
        email: string;
    }>;
    login({ email, password }: LoginUserDto): Promise<{
        token: string;
        email: string;
    }>;
    forgotPassword({ email }: ForgotUserDto): Promise<void>;
}
