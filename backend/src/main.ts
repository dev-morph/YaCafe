import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: 'http://localhost:9090',
    credentials: true,
    methods: ['GET', 'PUT', 'POST'],
  });
  await app.listen(9091);
}
bootstrap();
