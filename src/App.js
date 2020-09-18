import React, { useEffect } from "react";
import "./App.css";

function App() {
  useEffect(() => {
    window.addEventListener("message", (e) =>
      console.log("event from parent is ===", e)
    );
  });

  const handleClick = () => {
    // console.log("window is ===", window); // Uncomment to illustrate how window.parent is blocked
    window.parent.postMessage(
      JSON.parse(`{ "key": "value", "other": 1, "another": false }`),
      "http://localhost:8080"
    );
  };

  const handleClose = () => {
    window.parent.postMessage(`close`, "http://localhost:8080");
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Hi I am the embedded App. I am running on port 3000</h1>
        <button onClick={() => handleClick()}>Click me!</button>
        <button onClick={() => handleClose()}>Close Me!</button>
      </header>
    </div>
  );
}

export default App;
