import jwt from 'jsonwebtoken';

export const generateJWT = (
  toBeSignedObj: any,
  expiresIn?: string | number
) => {
  return jwt.sign(
    {
      ...toBeSignedObj
    },
    process.env.ACCESS_TOKEN_SECRET,
    { expiresIn: expiresIn || '1800s' }
  );
};
