import "./App.css";
import { THEMES } from "./styles/colors";
import Box from "@mui/material/Box";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAugZqs5-3--TatiXOO-iDQ7jwz8TwlUp0",
  authDomain: "slacktastic-79bc0.firebaseapp.com",
  projectId: "slacktastic-79bc0",
  storageBucket: "slacktastic-79bc0.appspot.com",
  messagingSenderId: "909296469273",
  appId: "1:909296469273:web:d57b13ec16c60f79dc3188",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();

function App() {
  return (
    <>
      <div className="App">
        <Box
          sx={{
            backgroundColor: THEMES.primary,
            color: THEMES.platinum,
            textAlign: "center",
            minHeight: "100vh",
          }}
        >
          <header className="App-header">
            {auth ? <SignUp /> : <SignUp />}
          </header>
        </Box>
      </div>
    </>
  );
}

export default App;
