import { DatabaseModule } from './../database/database.module';
import { userRepository } from './user.repository';
import { Module } from '@nestjs/common';

@Module({
  imports: [DatabaseModule],
  providers: [...userRepository],
})
export class UserModule {}
