import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private configService: ConfigService) {
    super({
      jwtFromRequest: ExtractJwt.fromExtractors([
        (req) => {
          return req?.cookies.Authorization;
        },
      ]),
      ignoreExpiration: false,
      secretOrKey: configService.get('JWT_SECRET'),
    });
  }

  /**passport는 JWT의 signiture를 확인, JSON을 decode한뒤, validate함수를 실행시킨다. 이때 decode한 payload를 인자로 넘겨준다. */
  async validate(payload: any) {
    return { userId: payload.userId, username: payload.sub };
  }
}
