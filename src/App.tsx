import React, { useState, useEffect } from "react";
import "./App.css";
import { asyncFromPagename } from "./AsyncPage";
function App() {
  const [pagename, setPagename] = useState("page1");

  return (
    <div className="App">
      APP
      <br />
      <a onClick={() => setPagename("page1")} className="App-link">
        go page1
      </a>
      <br />
      <a onClick={() => setPagename("page2")} className="App-link">
        go page2
      </a>
      <div>{asyncFromPagename(pagename)}</div>
    </div>
  );
}

export default App;
