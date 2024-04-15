/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import { useState } from "react";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Footer from "./Components/Footer";
import SignUpPage from "./Components/SignUpPage";
import User from "./Components/User";

function App() {
  const [community, setCommunity] = useState("ALL");
  const [page, setPage] = useState("SIGNIN");

  return (
    <>
      {page === "HOME" && (
        <>
          <Header setCommunity={setCommunity} />
          <Main community={community} />
          <Footer />
        </>
      )}

      {page === "SIGNIN" && <SignUpPage setPage={setPage} />}

      {/* <Header />
      <User /> */}
    </>
  );
}

export default App;
