import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  UnauthorizedException,
} from '@nestjs/common';

import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { ForgotUserDto } from 'src/users/dto/forgotpassword-user';
import { LoginUserDto } from 'src/users/dto/login-user';
import { UserService } from 'src/users/user.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UserService,
    private readonly jwtService: JwtService,
  ) { }

  async register({ fullname, email, password }: CreateUserDto) {
    try {

      const user = await this.usersService.findOneByEmail(email);

      if (user) {
        throw new BadRequestException('User already exists');
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
    } catch (error) {
      throw new InternalServerErrorException(error)
    }
  }

  async login({ email, password }: LoginUserDto) {
    try {

      const user = await this.usersService.findByEmailWithPassword(email);
      if (!user) {
        throw new UnauthorizedException('Wrong credentials');
      }

      const isPasswordValid = await bcrypt.compare(password, user.password);

      if (!isPasswordValid) {
        throw new UnauthorizedException('Incorrect Password');
      }

      const payload = { email: user.email };
      const token = await this.jwtService.signAsync(payload);

      return {
        token,
        email,
      };
    }
    catch (error) {
      throw new InternalServerErrorException(error)
    }
  }

  async forgotPassword({ email }: ForgotUserDto) {
    try {
      const user = await this.usersService.findByEmailWithPassword(email);
      if (!user) {
        throw new UnauthorizedException('No user was found');
      }
    }
    catch (error) {
      throw new InternalServerErrorException(error)
    }
  }
}