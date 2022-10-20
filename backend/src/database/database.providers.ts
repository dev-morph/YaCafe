import { DataSource } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'mysql',
        // host: 'localhost',
        host: 'host.docker.internal',
        port: Number(process.env.DB__PORT),
        username: process.env.DB__USER__NAME,
        password: process.env.DB__PASSWORD,
        database: process.env.DB__DATABASE,
        entities: ['dist/**/entities/*.entity.js'],
        // entities: [join(__dirname, '**', '*.entity{.ts,.js}')],
        synchronize: true,
      });

      return dataSource.initialize();
    },
  },
];
