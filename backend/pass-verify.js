const bcrypt = require('bcrypt');

async function verifyPassword() {
  const psw = '1234';
  const hash = '$2b$10$PHD2Ykfur98KNFmjpfBqQugMSPKkwoKayKgor4fX6UzxzgEmDD3bS';

  const isMatch = await bcrypt.compare(psw, hash);

  console.log(isMatch);
}

verifyPassword();
