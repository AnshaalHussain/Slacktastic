import React, { useState } from "react";
import { THEMES } from "../styles/colors";

import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import Grid from "@mui/system/Unstable_Grid/Grid";
import { Box } from "@mui/system";

const SignupForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorMessage);
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
                label="Password"
                margin="normal"
                size="small"
                style={{
                  color: THEMES.primary,
                  backgroundColor: THEMES.secondary,
                }}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <Button
                variant="contained"
                size="large"
                disableElevation
                style={{
                  color: THEMES.secondary,
                  backgroundColor: THEMES.tertiary,
                  marginTop: "1rem",
                }}
                onClick={(e) => handleSignUp(e)}
              >
                Sign Up
              </Button>
              {error ? (
                <Box
                  paddingTop="0.5rem"
                  paddingBottom="0.5rem"
                  color={THEMES.warning}
                >
                  {error}
                </Box>
              ) : (
                <Box></Box>
              )}
            </Stack>
          </Box>
        </Grid>
      </Container>
    </>
  );
};

export default SignupForm;
