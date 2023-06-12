// To use this page import and add the component in the app.js file

import React, { useState } from 'react';
import { CognitoUserAttribute } from 'amazon-cognito-identity-js';
import { userPool } from '../components/aws-config';

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleSignUp = event => {
    event.preventDefault();
    const attributeList = [
      new CognitoUserAttribute({
        Name: 'email',
        Value: email
      }),
      new CognitoUserAttribute({
        Name: 'name',
        Value: username
      }),
    ];

    userPool.signUp(username, password, attributeList, null, (error, result) => {
      if (error) {
        console.log('Error signing up:', error);
        return;
      }
      console.log('User signed up successfully!', result);
    });
  };

  return (
    <form onSubmit={handleSignUp}>
      <label>
        Username:
        <input type="text" value={username} onChange={e => setUsername(e.target.value)} />
      </label>
      <label>
        Password:
        <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
      </label>
      <label>
        Email:
        <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
      </label>
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default SignUp;
