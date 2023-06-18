import "./App.css";
import { Routes, Route } from "react-router-dom";

import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Messages from "./pages/Messages";
import Error from "./pages/Error";
import PrivateRoutesLayout from "./pages/PrivateRoutesLayout";

function App() {
  return (
    <>
      <div className="App">
        <Routes>
          {/* <Route path="/" element={<Messages />} /> */}
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="*" element={<Error />} />

          {/* protected routes */}
          <Route element={<PrivateRoutesLayout />}>
            <Route path="/" element={<Messages />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
