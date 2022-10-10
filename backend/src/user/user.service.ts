import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @Inject('User')
    private userRepository: Repository<User>,
  ) {}
  async signup(user) {
    console.log('user is ', user);
    // const result = await this.userRepository.insert(user);
    // console.log('result is ', result);
    // console.log('in service');
    return 'success';
  }
}
