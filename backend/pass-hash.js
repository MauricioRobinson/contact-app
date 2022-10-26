const bcrypt = require('bcrypt');

async function hash() {
  const password = '1234';
  const hashPwd = await bcrypt.hash(password, 10);
  return hashPwd;
}

async function verifyPassword(psw, hash) {
  const isMatch = await bcrypt.compare(psw, hash);

  return isMatch;
}

hash()
  .then((res) => {
    console.log(res);
    verifyPassword('1234', res).then((data) => {
      console.log(data);
    });
  })
  .catch((err) => {
    console.log(err);
  });
