import { useState } from "react";
import Header from "./Components/Header";
import Main from "./Components/Main";

function App() {
  const [community, setCommunity] = useState("ALL");

  return (
    <>
      <Header setCommunity={setCommunity} />
      <Main community={community} />
    </>
  );
}

export default App;
