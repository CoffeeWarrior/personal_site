import React from "react";
import { useState, useEffect } from "react";
import read from "../services/read";

import login from "../services/login";
import { useNavigate } from "react-router-dom";
import links from "../routing/links/links";
import { PageContainer } from "../components";
import firebaseResources from "../services/firebaseResources";

const loginHelper = async (email: string, password: string, navigate: any) => {
  try {
    let user = await login(email, password);
    if (user) {
      navigate(links.updateSite);
    } else {
      throw Error("Failed");
    }
  } catch (e) {
    alert("Login failed");
  }
};

export const Login = () => {
  const default_email = "Lucas.Goldman99@Gmail.com";
  const [email, setEmail] = useState(default_email);
  const [password, setPassword] = useState("");
  const [text, setText] = useState("");

  useEffect(() => {
    read(firebaseResources.login).then((val) => {
      setText(val.posts[0]);
      console.log(val);
    });
  }, []);

  let navigate = useNavigate();

  return (
    <PageContainer>
      <div className="LoginPage">
        <div className="Login">
          <div className="Logintext">
            <h1>Login</h1>
            <p>{text}</p>
          </div>
          <div className="Inputs">
            <h2>Email</h2>
            <input
              type="text"
              value={default_email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
            <h2>Password</h2>
            <input
              type="password"
              onBlur={(e) => setPassword(e.target.value)}
            ></input>
            <input
              className="button"
              type="button"
              value="Log in"
              onClick={() => loginHelper(email, password, navigate)}
            ></input>
          </div>
        </div>
      </div>
    </PageContainer>
  );
};
