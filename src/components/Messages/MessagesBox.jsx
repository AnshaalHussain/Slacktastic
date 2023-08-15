import React from "react";
import { Box, Paper } from "@mui/material";
import { THEMES } from "../../styles/colors";

import Post from "./Post";

const MessagesBox = ({ messages }) => {
  return (
    <>
      <Paper
        variant="outlined"
        square
        sx={{
          height: "75vh",
          width: "100%",
          backgroundColor: THEMES.secondary,
          marginTop: "110px",
          marginBottom: "110px",
        }}
      >
        {messages &&
          messages.map((post) => (
            <>
              <Post postData={post} />
            </>
          ))}
      </Paper>
    </>
  );
};

export default MessagesBox;
