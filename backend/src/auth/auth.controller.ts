import { UserService } from 'src/user/user.service';
import { Controller, UseGuards, Post, Req, Res, Body } from '@nestjs/common';
import { Request, Response } from 'express';
import { LocalAuthGuard } from './local-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private userService: UserService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  login(@Req() req: Request, @Res({ passthrough: true }) res: Response) {
    res.cookie('Authentication', true);
    return req.user;
  }

  @Post('signup')
  async signup(@Body() user) {
    const result = await this.userService.signup(user);
    return result;
  }
}
