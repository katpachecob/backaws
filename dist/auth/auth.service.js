"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const bcrypt = require("bcrypt");
const user_service_1 = require("../users/user.service");
let AuthService = class AuthService {
    constructor(usersService, jwtService) {
        this.usersService = usersService;
        this.jwtService = jwtService;
    }
    async register({ fullname, email, password }) {
        try {
            const user = await this.usersService.findOneByEmail(email);
            if (user) {
                throw new common_1.BadRequestException('User already exists');
            }
            await this.usersService.create({
                fullname,
                email,
                password: await bcrypt.hash(password, 10),
            });
            return {
                fullname,
                email,
            };
        }
        catch (error) {
            throw new common_1.InternalServerErrorException(error);
        }
    }
    async login({ email, password }) {
        try {
            const user = await this.usersService.findByEmailWithPassword(email);
            if (!user) {
                throw new common_1.UnauthorizedException('Wrong credentials');
            }
            const isPasswordValid = await bcrypt.compare(password, user.password);
            if (!isPasswordValid) {
                throw new common_1.UnauthorizedException('Incorrect Password');
            }
            const payload = { email: user.email };
            const token = await this.jwtService.signAsync(payload);
            return {
                token,
                email,
            };
        }
        catch (error) {
            throw new common_1.InternalServerErrorException(error);
        }
    }
    async forgotPassword({ email }) {
        try {
            const user = await this.usersService.findByEmailWithPassword(email);
            if (!user) {
                throw new common_1.UnauthorizedException('No user was found');
            }
        }
        catch (error) {
            throw new common_1.InternalServerErrorException(error);
        }
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [user_service_1.UserService,
        jwt_1.JwtService])
], AuthService);
//# sourceMappingURL=auth.service.js.map