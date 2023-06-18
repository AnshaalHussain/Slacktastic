import React from "react";
import { THEMES } from "../styles/colors";

import Box from "@mui/material/Box";

import SignIn from "./SignIn";
import SignUp from "./SignUp";

import Header from "../components/Header";

const Layout = (props) => {
  return (
    <div>
      <Header />
      <Box
        sx={{
          backgroundColor: THEMES.primary,
          color: THEMES.platinum,
          textAlign: "center",
          minHeight: "100vh",
        }}
      >
        {props.children}
      </Box>
      {/* <Box
        sx={{
          backgroundColor: THEMES.primary,
          color: THEMES.platinum,
          textAlign: "center",
          minHeight: "100vh",
        }}
      >
        <SignUp />
      </Box> */}
    </div>
  );
};

export default Layout;
