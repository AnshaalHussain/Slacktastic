import React from "react";
import { THEMES } from "../../styles/colors";
import { Card, Box, CardContent, Typography, Avatar } from "@mui/material";

const Post = ({ postData }) => {
  return (
    <>
      <Box
        sx={{
          border: "1px solid lightgray",
          borderTopLeftRadius: "1000px",
          float: "left",
          display: "flex",
          padding: "20px 10px 0 20px",
          margin: "20px",
          borderRadius: "3000px",
          boxShadow: "0 0 10px rgb(164, 164, 164)",
          alignItems: "center",
        }}
      >
        <Avatar
          alt="profile pic"
          src={postData.photoURL}
          sx={{ width: 56, height: 56 }}
        />
        <Typography sx={{ fontSize: 14 }}>{postData.displayName}:</Typography>
        <Typography sx={{ fontSize: 14 }}>{postData.date}</Typography>
        <Typography sx={{ fontSize: 18 }}>{postData.messageContent}</Typography>
      </Box>
    </>
  );
};

export default Post;
