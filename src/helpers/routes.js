import React from "react";
import { Navigate, useLocation } from "react-router-dom";

//see if user is logged in and redirect.
//1 function is to check if the user is logged in
//2 function is protected routes so we need to abstract it out here.
//4:20

export function IsUserRedirect({ user, loggedInPath, children }) {
  if (!user) {
    return children;
  }
  if (user) {
    return <Navigate to={{ pathname: loggedInPath }} />;
  }
  return null;
}

export function ProtectedRoute({ user, children }) {
  const location = useLocation();
  if (user) {
    return children;
  }
  if (!user) {
    return <Navigate to={{ pathname: "/signin", state: { from: location } }} />;
  }
}
