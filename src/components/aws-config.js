import { CognitoUserPool } from 'amazon-cognito-identity-js';

const poolData = {
  UserPoolId: 'us-west-2_621DMDWc0',
  ClientId: '3qpq5mc2k0t1ivfjdhqe46hac8',
};

export const userPool = new CognitoUserPool(poolData);
