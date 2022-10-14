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
  async signup(user: CreateUserDto): Promise<User> {
    return await this.userRepository.save(User.create(user));
  }
}
