import React from "react";
import { THEMES } from "../styles/colors";

import { Box } from "@mui/system";

const Header = () => {
  return (
    <>
      {/* note: make mobile first */}
      <Box
        sx={{
          backgroundColor: THEMES.primary,
          borderBottom: "0.5px solid",
          borderColor: THEMES.secondary,
          minHeight: "6.5vh",
          maxHeight: "6.5vh",
        }}
      >
        {/* <Box
          sx={{
            textAlign: "left",
            color: THEMES.secondary,
            minHeight: "8vh",
            fontSize: "2.4rem",
            padding: "1rem",

            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "start",
          }}
        >
          slacktastic
        </Box> */}
      </Box>
    </>
  );
};

export default Header;
