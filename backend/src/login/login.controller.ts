import { Controller, Get } from '@nestjs/common';

@Controller('login')
export class LoginController {
  @Get('')
  login() {
    console.log('here');
    return 'login Api';
  }
}
