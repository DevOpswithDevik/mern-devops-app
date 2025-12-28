import { useEffect, useState } from "react";

function App() {
  const [status, setStatus] = useState("Loading...");

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/health`)
      .then(res => res.json())
      .then(data => setStatus(data.status))
      .catch(() => setStatus("Backend not reachable"));
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>MERN DevOps App</h1>
      <h2>Backend status: {status}</h2>
    </div>
  );
}

export default App;
