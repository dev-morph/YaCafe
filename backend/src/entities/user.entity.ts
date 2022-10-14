import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert } from 'typeorm';
import { hashPassword } from 'src/common/bcrypt/bcrypt';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  idx: number;

  @Column()
  id: string;

  @Column()
  password: string;

  @Column()
  email: string;

  static create({ id, password, email }) {
    const user = new User();
    user.id = id;
    user.password = password;
    user.email = email;
    return user;
  }

  @BeforeInsert()
  async hashPlainPassword() {
    console.log('here');
    this.password = await hashPassword(this.password);
  }
}
