import { CreateUserDto } from "./create-user.dto";
declare const LoginUserDto_base: import("@nestjs/mapped-types").MappedType<Pick<CreateUserDto, "password" | "email">>;
export declare class LoginUserDto extends LoginUserDto_base {
}
export {};
