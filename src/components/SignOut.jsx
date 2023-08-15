import React from "react";
import { THEMES } from "../styles/colors";

import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router";

import { Button } from "@mui/base";

const SignOut = () => {
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return (
    <>
      <Button
        variant="contained"
        size="large"
        disableElevation
        style={{
          color: THEMES.secondary,
          backgroundColor: THEMES.tertiary,
          marginTop: "1rem",
        }}
        onClick={(e) => handleSignOut(e)}
      >
        Sign Out
      </Button>
    </>
  );
};

export default SignOut;
