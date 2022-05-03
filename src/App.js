import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

const App = () => {
  const [name, setName] = useState("");
  const [showGreeting, setShowGreeting] = useState(false);
  return (
    <>
      <input
        type="text"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <button onClick={() => setShowGreeting(!showGreeting)}>
        {showGreeting ? "Hide" : "Show"}
      </button>
      <p> {showGreeting ? `Hello, ${name}` : ``}</p>
    </>
  );
};
export default App;
