import { Module } from '@nestjs/common';
import { DatabaseModule } from './../database/database.module';
import { userRepository } from './user.repository';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  imports: [DatabaseModule],
  controllers: [UserController],
  providers: [...userRepository, UserService],
})
export class UserModule {}
