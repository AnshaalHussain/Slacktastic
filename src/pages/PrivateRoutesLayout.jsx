import React from "react";
import { Outlet, useLocation, Navigate } from "react-router";
import { auth } from "../firebase";

const PrivateRoutesLayout = () => {
  const location = useLocation();

  return auth.currentUser ? (
    <Outlet />
  ) : (
    <Navigate to="/signin" state={{ from: location }} replace />
  );
};

export default PrivateRoutesLayout;
