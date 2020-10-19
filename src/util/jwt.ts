import jwt from 'jsonwebtoken';

/**
 * @param toBeSignedObj Any object that user wants to sign
 * @param expiresIn expressed in seconds or a string describing a time span zeit/ms.
 * @returns JWT
 */
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
