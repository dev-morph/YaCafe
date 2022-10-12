import { IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  readonly id: string;

  @IsString()
  readonly password: string;

  // 배열이면 each true, 옵션값이면 IsOptional 사용
  @IsString()
  readonly email: string;
}
