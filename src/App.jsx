import "./styles.css";
// import { response } from "./captcha";
// import { useState } from "react";

export default function App() {
  return (
    <div className="container">
      <div className="box">
        <h1>Sign Up Form</h1>
        <div className="inputBox">
          <label>Email Address</label>
          <input type="text" />
        </div>
        <div className="inputBox">
          <label>Password</label>
          <input type="text" />
        </div>
        <div className="captchaBox">
          <div className="imgWrap">
            <img
              className="img"
              src="https://www.pandasecurity.com/en/mediacenter/src/uploads/2014/09/avoid-captcha.jpg"
            />
          </div>
          <input type="text" />
        </div>
        <div className="inputBox">
          <input type="submit" />
        </div>
      </div>
    </div>
  );
}
