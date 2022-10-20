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

  /** 새로운 User객체를 생성해주는 메소드*/
  static create({ id, password, email }) {
    const user = new User();
    user.id = id;
    user.password = password;
    user.email = email;
    return user;
  }

  /**PlainText로 받은 Password를 자동으로 Hash하여 DB에 저장해주는 메소드 */
  @BeforeInsert()
  async hashPlainPassword() {
    console.log('here');
    this.password = await hashPassword(this.password);
  }
}
