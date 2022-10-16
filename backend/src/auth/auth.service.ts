import { UserService } from '../user/user.service';
import { Injectable } from '@nestjs/common';
import { validatePassword } from 'src/common/bcrypt/bcrypt';

@Injectable()
export class AuthService {
  constructor(private userService: UserService) {}

  async validateUser(userId: string, password: string): Promise<any> {
    const user = await this.userService.findUser(userId);
    const result = await validatePassword(password, user.password);

    if (user && result) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }
}
