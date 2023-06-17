import "./App.css";
import { THEMES } from "./styles/colors";

import Box from "@mui/material/Box";

import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

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
            <SignIn />
            <SignUp />
          </header>
        </Box>
      </div>
    </>
  );
}

export default App;
