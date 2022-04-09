import React from "react";
import * as ROUTES from "./constants/routes";
import { Route, Routes } from "react-router-dom";
import { Home, Browse, SignIn, SignUp } from "./pages";
import { IsUserRedirect, ProtectedRoute } from "./helpers/routes";
import { useAuthListener } from "./hooks";

// function AuthRoute({ children }) {
//   if (user) {
//     return <Navigate to={ROUTES.BROWSE} />;
//   }

//   return children;
// }

export default function App() {
  const user = useAuthListener();

  return (
    <Routes>
      <Route
        path={ROUTES.HOME}
        element={
          <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE}>
            <Home />
          </IsUserRedirect>
        }
      />

      <Route
        path={ROUTES.BROWSE}
        element={
          <ProtectedRoute user={user} path={ROUTES.BROWSE}>
            <Browse />
          </ProtectedRoute>
        }
      />

      <Route
        path={ROUTES.SIGNIN}
        element={
          <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE}>
            <SignIn />
          </IsUserRedirect>
        }
      />
      <Route
        path={ROUTES.SIGNUP}
        element={
          <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE}>
            <SignUp />
          </IsUserRedirect>
        }
      />
    </Routes>
  );
}
