import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';
import { CreateUserDto } from './create-user.dto';

@Injectable()
export class UserService {
  constructor(
    @Inject('User')
    private userRepository: Repository<User>,
  ) {}

  /**로그인 로직을 처리하는 함수 */
  async login(): Promise<any> {
    //1.
    console.log('login');
  }

  /** 입력받은 user를 DB에 저장해주는 함수, 이때 password는 자동으로 hash되어 저장된다. */
  async signup(user: CreateUserDto): Promise<User> {
    return await this.userRepository.save(User.create(user));
  }

  /**id를 가진 user를 찾는 함수 */
  async findUser(userId: string): Promise<User> {
    const result = await this.userRepository.findOne({ where: { id: userId } });
    return result;
  }
}
