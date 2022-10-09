import { DataSource } from 'typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async (configService: ConfigService) => {
      const dataSource = new DataSource({
        type: 'mysql',
        host: 'host.docker.internal',
        port: Number(process.env.DB__PORT),
        username: process.env.DB__USER__NAME,
        password: process.env.DB__PASSWORD,
        database: process.env.DB__DATABASE,
        entities: [__dirname + '/../**/*.entity.ts'],
        synchronize: true,
      });

      return dataSource.initialize();
    },
  },
];
