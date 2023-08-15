import React from "react";

import Layout from "./Layout";
import SignOut from "../components/SignOut";
import { Container, Stack } from "@mui/system";
import Chat from "../components/Messages/Chat";

const Messages = () => {
  return (
    <>
      <Layout>
        <Container maxWidth="sm">
          <SignOut />
          {/* <Stack> */}
          <Chat />
          {/* </Stack> */}
        </Container>
      </Layout>
    </>
  );
};

export default Messages;
