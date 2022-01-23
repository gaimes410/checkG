import Path from "./Components/Path";
import { useState } from "react";

function App() {
  const api_url = "127.0.0.1:8000"

  return (
    <Path api_url={api_url}/>
  );
}

export default App;
