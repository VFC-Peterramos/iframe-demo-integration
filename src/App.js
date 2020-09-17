import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  useEffect(() => {
    window.addEventListener("message", (e) => console.log("event is ===", e));
  });
  const handleClick = () => {
    // alert("Hello World");
    console.log("window.parent", window.parent);
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hi I am the embedded App. I am running on port 3000</h1>
        <button onClick={() => handleClick()}>Click me!</button>
      </header>
    </div>
  );
}

export default App;
