import { User } from './entities/user.entity';
import { DataSource } from 'typeorm';

export const userRepository = [
  {
    provide: 'User',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(User),
    inject: ['DATA_SOURCE'],
  },
];
