import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CognitoUser, AuthenticationDetails } from "amazon-cognito-identity-js";
import { userPool } from "../components/aws-config";
import "./Login.css";

export default function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

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
        navigate("/Home");
        props.onLoginSuccess();
      },
      onFailure: (err) => {
        console.error("Authentication failed", err);
        setErrorMessage("Login failed. Please check your email and password.");
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
      <button className="login-button" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
}
