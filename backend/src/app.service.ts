import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    console.log('inside service');
    return 'Hello World  && ME!@#~!~!123123';
  }
}
