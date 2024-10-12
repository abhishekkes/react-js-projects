import { useState, useEffect } from "react";
import "./App.css";
import TopGitHubUsers from "./TopGitHubUsers";

function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    alert("I am on Loading the Page");
  }, []);
  useEffect(() => {
    alert("I am use effect");
  }, [count]);

  return (
    <>
    <TopGitHubUsers/>
      <div></div>
      <h1>Use Effect Example</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
