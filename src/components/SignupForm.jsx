import React, { useState } from "react";
import { THEMES } from "../styles/colors";

import { auth } from "../firebase";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  updateProfile,
} from "firebase/auth";
import { useNavigate, useLocation } from "react-router";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import Grid from "@mui/system/Unstable_Grid/Grid";
import { Box } from "@mui/system";

const SignupForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [error, setError] = useState(null);

  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handleSignUp = (e) => {
    e.preventDefault();

    if (!email || !password || !confirmPassword || !displayName) {
      setError("Missing Field(s).");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords did not match.");
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;

        if (user && auth.currentUser) {
          try {
            // sendEmailVerification(auth.currentUser);
            updateProfile(auth.currentUser, {
              displayName: displayName,
              photoURL: "https://robohash.org/2?set=set2",
            });

            console.log("currentUser", auth.currentUser);
          } catch (error) {
            console.log(error);
          }
        }

        navigate(from, { replace: true });
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        setDisplayName("");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorMessage);

        if (errorCode === "auth/email-already-in-use") {
          setError("Email already exists!");
        }
      });
  };

  return (
    <>
      <Container maxWidth="xs">
        <Grid container justifyContent="center" alignItems="center">
          <Box minWidth="255px">
            <Stack spacing={1}>
              <TextField
                variant="filled"
                label="Email"
                margin="normal"
                size="small"
                style={{
                  color: THEMES.primary,
                  backgroundColor: THEMES.secondary,
                }}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                variant="filled"
                label="Display name"
                margin="normal"
                size="small"
                style={{
                  color: THEMES.primary,
                  backgroundColor: THEMES.secondary,
                }}
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
              />

              <TextField
                variant="filled"
                label="Password"
                type="password"
                margin="normal"
                size="small"
                style={{
                  color: THEMES.primary,
                  backgroundColor: THEMES.secondary,
                }}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <TextField
                variant="filled"
                label="Confirm Password"
                type="password"
                margin="normal"
                size="small"
                style={{
                  color: THEMES.primary,
                  backgroundColor: THEMES.secondary,
                }}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />

              {error && (
                <Box
                  paddingTop="0.5rem"
                  paddingBottom="0.5rem"
                  color={THEMES.warning}
                >
                  {error}
                </Box>
              )}

              <Button
                variant="contained"
                size="large"
                disableElevation
                style={{
                  color: THEMES.secondary,
                  backgroundColor: THEMES.tertiary,
                  marginTop: "1rem",
                  marginBottom: "1rem",
                }}
                onClick={(e) => handleSignUp(e)}
              >
                Sign Up
              </Button>
            </Stack>
          </Box>
        </Grid>
      </Container>
    </>
  );
};

export default SignupForm;
