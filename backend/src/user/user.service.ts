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
    await this.userRepository.insert(user);
    return 'success';
  }
}
