import React, { useState } from "react";
import {
  CognitoUser,
  AuthenticationDetails,
  CognitoUserAttribute,
} from "amazon-cognito-identity-js";
import { userPool } from "./aws-config";
import './Login.css';

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [requiresNewPassword, setRequiresNewPassword] = useState(false);

  const handleLogin = () => {
    const authenticationData = {
      Username: email,
      Password: password,
    };
    const authenticationDetails = new AuthenticationDetails(authenticationData);
    const userData = {
      Username: email,
      Pool: userPool,
    };
    const cognitoUser = new CognitoUser(userData);

    cognitoUser.authenticateUser(authenticationDetails, {
      onSuccess: (result) => {
        console.log("Authentication successful", result);
        // Redirect to authenticated page
        // e.g., window.location.href = '/dashboard';
        window.location.href = "/Home";
      },
      onFailure: (err) => {
        console.error("Authentication failed", err);
        setErrorMessage("Login failed. Please check your email and password.");
      },
      newPasswordRequired: (userAttributes, requiredAttributes) => {
        console.log(
          "New password required",
          userAttributes,
          requiredAttributes
        );
        const filteredAttributes = requiredAttributes.filter((attr) => {
          return userAttributes[attr].writable;
        });
        setRequiresNewPassword(true);

        console.log(newPassword);
        cognitoUser.completeNewPasswordChallenge(
          {
            Password: newPassword,
          },
          filteredAttributes,
          {
            onSuccess: (result) => {
              console.log("New password set successfully", result);
              // Redirect to authenticated page
              // e.g., window.location.href = '/dashboard';
            },
            onFailure: (err) => {
              console.error("New password set failed", err);
              setErrorMessage("New password set failed. Please try again.");
            },
          }
        );
      },
    });
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      {errorMessage && <p>{errorMessage}</p>}
      <input
        className="login-input"
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className="login-input"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {requiresNewPassword && (
        <input
          className="login-input"
          type="password"
          placeholder="New password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
      )}
      <button className="login-button" onClick={handleLogin}>Login</button>
     
    </div>
  );
}
