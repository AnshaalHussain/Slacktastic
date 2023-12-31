import React from "react";
import { THEMES } from "../styles/colors";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

import SignInForm from "../components/SignInForm.jsx";
import Layout from "./Layout";

const SignIn = () => {
  return (
    <>
      <Layout>
        <Container maxWidth="sm">
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "15vh",
            }}
          >
            <Box
              sx={{
                fontSize: "3rem",
                fontWeight: "bold",
                marginBottom: "0.65rem",
              }}
            >
              Sign In
            </Box>

            <Box
              sx={{
                color: THEMES.secondary,
                fontSize: "0.85rem",
                textAlign: "center",
                lineHeight: "1.7rem",
                marginBottom: "1rem",
              }}
            >
              For every user, a Slacktastic account was made. <br /> ...And for
              every user, it ends well.
            </Box>

            <SignInForm />

            <a href="/signup">
              <Box
                sx={{
                  fontSize: "small",
                  textDecoration: "none",
                  textDecoration: "underline",
                  fontStyle: "italic",
                  color: THEMES.subheading,
                }}
              >
                Don't have an account? Sign up here.
              </Box>
            </a>
          </Box>
        </Container>
      </Layout>
    </>
  );
};

export default SignIn;
