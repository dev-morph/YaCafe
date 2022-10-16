import { LocalAuthGuard } from './../auth/local-auth.guard';
import { UserService } from './user.service';
import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import { User } from 'src/entities/user.entity';

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

  @Get(':id')
  async findOne(
    @Param() { id },
    @Res({ passthrough: true }) res: Response,
  ): Promise<any> {
    const result = await this.userService.findUser(id);
    if (!result) {
      return { code: 204, message: '아이디 사용 가능합니다.' };
    } else {
      return { message: '이미 아이디가 존재 합니다.' };
    }

    return result;
  }
}
