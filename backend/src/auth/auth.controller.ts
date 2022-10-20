import { AuthService } from './auth.service';
import { UserService } from 'src/user/user.service';
import { Controller, UseGuards, Post, Req, Res, Body } from '@nestjs/common';
import { Request, Response } from 'express';
import { LocalAuthGuard } from './local-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(
    private userService: UserService,
    private authService: AuthService,
  ) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Req() req: Request, @Res({ passthrough: true }) res: Response) {
    const { accessToken } = await this.authService.login(req.user);

    res.cookie('Authorization', accessToken);
    return req.user;
  }

  @Post('signup')
  async signup(@Body() user) {
    const result = await this.userService.creatUser(user);
    return result;
  }
}
