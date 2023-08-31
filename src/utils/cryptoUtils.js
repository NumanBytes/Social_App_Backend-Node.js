import express from 'constants';
import crypto from 'crypto';

const generatedSecretKey = () => {
    return crypto.randomBytes(32).toString('hex');

};

export default generatedSecretKey;
