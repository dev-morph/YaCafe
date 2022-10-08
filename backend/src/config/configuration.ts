import { join } from 'path';

export default () => ({
  envFilePath: ['.env', '.env.development'],
  isGlobal: true,
  database: {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: process.env.DB__USER__NAME,
    password: '!dlgudxo90',
    database: 'yacafe',
    entities: [join(__dirname, '/../enities/*.entity.ts')],
    synchronize: true,
  },
});
