import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: 'http://localhost:9090',
    credentials: true,
    methods: ['GET', 'PUT', 'POST'],
  });
  app.setGlobalPrefix('api');

  app.use(cookieParser());
  await app.listen(9091);
}
bootstrap();
