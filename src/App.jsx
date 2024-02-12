import { useState } from "react";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Footer from "./Components/Footer";

function App() {
  const [community, setCommunity] = useState("ALL");

  return (
    <>
      <Header setCommunity={setCommunity} />
      <Main community={community} />
      <Footer />
    </>
  );
}

export default App;
