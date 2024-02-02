import jwt from 'jsonwebtoken';

const secretKey = "ismoil";


export const SignMethod = (payload) => {
    return jwt.sign(payload, secretKey)
}
export const VerifyMethod = (token) => jwt.verify(token, secretKey);
