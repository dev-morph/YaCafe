import { JwtStrategy } from './jwt.strategy';
import { UserService } from '../user/user.service';
import { Injectable } from '@nestjs/common';
import { validatePassword } from 'src/common/bcrypt/bcrypt';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
    private configService: ConfigService,
  ) {}

  async validateUser(userId: string, password: string): Promise<any> {
    const user = await this.userService.findUser(userId);
    const result = await validatePassword(password, user.password);

    if (user && result) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  /**로그인 로직을 처리하는 함수 */
  async login(user: any): Promise<any> {
    //1.
    const payload = { userId: user.id, sub: user.email };
    return {
      accessToken: this.jwtService.sign(payload),
    };
  }
}
