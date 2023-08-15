import { useState, useEffect } from "react";
import { auth } from "../../firebase";
import { db } from "../../firebase";
import { ref, set, onValue, push, query, limitToLast } from "firebase/database";
import moment from "moment";

import { Stack } from "@mui/material";

import InputBar from "./InputBar";
import MessagesBox from "./MessagesBox";

const Chat = () => {
  const [text, setText] = useState("");
  const [messages, setMessages] = useState();

  // write
  const writeToDatabase = (chatroom) => {
    const today = moment().format();
    const user = auth.currentUser;
    const messagesListRef = ref(db, `${chatroom}/`);
    const newMessagesPostRef = push(messagesListRef);
    set(newMessagesPostRef, {
      messageContent: text,
      date: today,
      id: user.uid,
      displayName: user.displayName,
      photoURL: user.photoURL,
    });
    setText("");
  };

  // read
  useEffect(() => {
    const recentMessagesRef = query(ref(db, "General/"), limitToLast(100));

    onValue(recentMessagesRef, (snapshot) => {
      const res = [];
      snapshot.forEach((childSnapshot) => {
        const childData = childSnapshot.val();
        res.push(childData);
      });
      setMessages(res);
    });
  }, []);

  return (
    <>
      <Stack>
        <MessagesBox messages={messages} />
        <InputBar
          text={text}
          setText={setText}
          writeToDatabase={writeToDatabase}
        />
      </Stack>
    </>
  );
};

export default Chat;
