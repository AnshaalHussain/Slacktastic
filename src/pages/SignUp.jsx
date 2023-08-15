import React from "react";
import { THEMES } from "../styles/colors";

import Box from "@mui/material/Box";
import { Container } from "@mui/system";

import SignupForm from "../components/SignupForm";
import Layout from "./Layout";

const SignUp = () => {
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
              Sign Up
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
              <p> There's a first time for everything, right?</p>
            </Box>
            <SignupForm />
            <a href="/signin">
              <Box
                sx={{
                  fontSize: "small",
                  textDecoration: "none",
                  textDecoration: "underline",
                  fontStyle: "italic",
                  color: THEMES.subheading,
                }}
              >
                Already have an account? Sign in here.
              </Box>
            </a>
          </Box>
        </Container>
      </Layout>
    </>
  );
};

export default SignUp;
