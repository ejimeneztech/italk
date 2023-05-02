import React from "react";
import { userPool } from "./aws-config";

export default function Logout() {
  const handleLogout = () => {
    const cognitoUser = userPool.getCurrentUser();
    if (cognitoUser) {
      cognitoUser.signOut();

      window.location.href = "/login";
    }
  };

  return <button onClick={handleLogout}>Log Out</button>;
}
