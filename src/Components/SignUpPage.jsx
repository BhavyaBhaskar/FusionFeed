/* eslint-disable no-unused-vars */
import { useState } from "react";
import supabase from "../supabase";

function SignUpPage({ setPage }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="SignUp">
      <h1 className="SignUpLogo">
        <span>⚛️</span>The Fusion Feed
      </h1>
      <div>
        <div className="SignUpLabelInput">
          <label className="SignUpLabel">Name</label>
          <input
            className="SignUpTextBox"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Full Name"
          />
        </div>
        <div className="SignUpLabelInput">
          <label className="SignUpLabel">Email</label>
          <input
            className="SignUpTextBox"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Email"
          />
        </div>
        <div className="SignUpLabelInput">
          <label className="SignUpLabel">Password</label>
          <input
            className="SignUpTextBox"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter Password"
          />
        </div>
        <div className="SignUpLabelInput">
          <button onClick={() => setPage("HOME")}>SignUp</button>
        </div>
      </div>
    </div>
  );
}

function onSubmit({ email, password, setPage }) {
  signUp(email, password);
  setPage("HOME");
}

async function signUp({ email, password }) {
  let { data, error } = await supabase.auth.signUp({
    email: "someone@email.com",
    password: "EfaqZsNqrolhtXXoxzWL",
  });
}

export default SignUpPage;
