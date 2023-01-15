import "./styles.css";
import { response } from "./captcha-img";
import { useState } from "react";

export default function App() {
  const { url, ans } = response.captcha[1];
  const [captchaInputAns, setCaptchaInputAns] = useState("");
  const [error, setErrorMsg] = useState("");

  async function signupHandler(e) {
    e.preventDefault();
    console.log(ans, captchaInputAns);
    if (ans === captchaInputAns) {
      setErrorMsg("Captcha Matched");
    } else {
      setErrorMsg("Captcha ans not matching");
    }
  }

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
            <img className="img" alt="captcha" src={url} />
          </div>
          <input
            type="text"
            value={captchaInputAns}
            onChange={(e) => setCaptchaInputAns(() => e.target.value)}
          />
        </div>
        <div className="error">{error}</div>
        <div className="inputBox">
          <input type="submit" onClick={(e) => signupHandler(e)} />
        </div>
      </div>
    </div>
  );
}
