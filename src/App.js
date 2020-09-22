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
      "https://vfc-peterramos.github.io/iframe-integration-host/"
    );
  };

  const handleClose = () => {
    let url =
      window.location != window.parent.location
        ? document.referrer
        : document.location.href;
    console.log("url is ===", url);
    window.parent.postMessage(`close`, url);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Hi I am the embedded App.</h1>
        <button onClick={() => handleClick()}>Click me!</button>
        <button onClick={() => handleClose()}>Close Me!</button>
      </header>
    </div>
  );
}

export default App;
