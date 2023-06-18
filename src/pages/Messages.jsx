import React from "react";

import Layout from "./Layout";
import SignOut from "../components/SignOut";
import { Container, Stack } from "@mui/system";

const Messages = () => {
  return (
    <>
      <Layout>
        <Container maxWidth="sm">
          <Stack>
            Message Page
            <SignOut />
          </Stack>
        </Container>
      </Layout>
    </>
  );
};

export default Messages;
