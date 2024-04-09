import { useState } from "react";
import Authenticate from "./components/Authenticate";
import SignUpForm from "./components/SignUpForm";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [token, setToken] = useState(null);

  return (
    <>
      <Authenticate token={token} setToken={setToken} />
      <SignUpForm token={token} setToken={setToken} />
    </>
  );
}

export default App;
