import { LocalAuthGuard } from './../auth/local-auth.guard';
import { UserService } from './user.service';
import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}
  @Get('')
  getUserList() {
    return 'getUserList Api';
  }

  @UseGuards(LocalAuthGuard)
  @Post('login')
  login(@Req() req) {
    return req.user;
  }

  @Post('signup')
  signup(@Body() user) {
    return this.userService.signup(user);
  }
}
