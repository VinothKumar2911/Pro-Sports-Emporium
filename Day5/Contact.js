

import React, { useState } from "react";
import contact from "../assets/contact.jpg";
import "../styles/Contact.css";

function Contact() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignUp, setIsSignUp] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (fullName.trim() === "") {
      alert("Please enter your full name.");
      return;
    }

    if (email.trim() === "") {
      alert("Please enter your email address.");
      return;
    }

    if (password.trim() === "") {
      alert("Please enter a password.");
      return;
    }

    if (isSignUp) {
      alert("Sign-up successful!");
    } else {
      alert("Sign-in successful!");
    }

    setFullName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="contact">
      <div className="leftSide" style={{ backgroundImage: `url(${contact})` }}></div>
      <div className="rightSide">
        <h1>{isSignUp ? "Sign Up" : "Sign In"}</h1>

        <form id="contact-form" onSubmit={handleSubmit}>
          {isSignUp && (
            <div>
              <label htmlFor="name">Name</label>
              <input
                name="name"
                placeholder="Enter full name"
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
            </div>
          )}

          <label htmlFor="email">Email</label>
          <input
            name="email"
            placeholder="Enter email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="password">Password</label>
          <input
            name="password"
            placeholder="Enter password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">{isSignUp ? "Sign Up" : "Sign In"}</button>
          <button type="button" onClick={() => setIsSignUp(!isSignUp)}>
            {isSignUp ? "Already have an account? Sign In" : "Don't have an account? Sign Up"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
