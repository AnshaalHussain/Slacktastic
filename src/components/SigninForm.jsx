import React, { useState } from "react";
import { THEMES } from "../styles/colors";

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import Grid from "@mui/system/Unstable_Grid/Grid";
import { Box } from "@mui/system";

const SigninForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const auth = getAuth();

  const signIn = (auth, email, password) => {
    signInWithEmailAndPassword(auth, email, password)
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
      <Container minWidth="sm">
        <Grid container justifyContent="center" alignItems="center">
          <Box minWidth="255px">
            <Stack spacing={1}>
              <TextField
                variant="filled"
                label="Email"
                margin="normal"
                fullWidth
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
                onClick={() => signIn(auth, email, password)}
              >
                Sign In
              </Button>

              {error ? <div>{error}</div> : <div></div>}
            </Stack>
          </Box>
        </Grid>
      </Container>
    </>
  );
};

export default SigninForm;
