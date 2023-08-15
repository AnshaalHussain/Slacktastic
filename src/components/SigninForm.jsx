import React, { useState } from "react";
import { THEMES } from "../styles/colors";

import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

import { useNavigate, useLocation } from "react-router";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import Grid from "@mui/system/Unstable_Grid/Grid";
import { Box } from "@mui/system";

const SignInForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/signin";

  const handleSignIn = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorMessage);
      });

    setEmail("");
    setPassword("");
    setError(null);
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

              {error && (
                <Box
                  paddingTop="0.5rem"
                  paddingBottom="0.5rem"
                  color={THEMES.platinum}
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
                onClick={(e) => handleSignIn(e)}
              >
                Sign In
              </Button>
            </Stack>
          </Box>
        </Grid>
      </Container>
    </>
  );
};

export default SignInForm;
