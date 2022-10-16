import * as bcrypt from 'bcrypt';

const saltRounds = 10;

/** 비밀번호를 hash하는 함수 */
export async function hashPassword(plainPassword) {
  const hashedPassword = await bcrypt.hash(plainPassword, saltRounds);
  return hashedPassword;
}

/** hashed 비밀번호와 입력받은 비밀번호 비교하는 함수 */
export async function validatePassword(plainPassword, hashedPassword) {
  return await bcrypt.compare(plainPassword, hashedPassword);
}
