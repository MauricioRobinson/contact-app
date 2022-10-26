const jwt = require('jsonwebtoken');
const secret = 'myKey';
const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNjY2ODA3MDU2fQ.dCjJr8k5jR_CpZrTkj2YULwa_D6cqzohnSPdWHqEmnI';

function verifyToken(token, secret) {
  return jwt.verify(token, secret);
}

const payload = verifyToken(token, secret);

console.log(payload);
