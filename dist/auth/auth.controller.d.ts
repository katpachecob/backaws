import { AuthService } from './auth.service';
import { LoginUserDto } from 'src/users/dto/login-user';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    register(registerDto: CreateUserDto): Promise<{
        fullname: string;
        email: string;
    }>;
    login(loginDto: LoginUserDto): Promise<{
        token: string;
        email: string;
    }>;
}
