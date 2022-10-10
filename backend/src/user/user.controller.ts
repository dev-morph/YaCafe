import { UserService } from './user.service';
import { Body, Controller, Get, Post } from '@nestjs/common';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}
  @Get('')
  getUserList() {
    console.log('here');
    return 'getUserList Api';
  }

  @Post('signup')
  signup(@Body() user) {
    console.log('here is sigup, userInfo would be', user);
    return this.userService.signup(user);
  }
}
