import { UserService } from './user.service';
import { Controller, Get, Post } from '@nestjs/common';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}
  @Get('')
  getUserList() {
    console.log('here');
    return 'getUserList Api';
  }

  @Post('signup')
  signup() {
    console.log('here is sigup');
    return this.userService.signup();
  }
}
