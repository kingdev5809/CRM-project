import React, { useState } from "react";
import "../../Layout/layout.css";

import backImg from "../../images/login-page-img.png";
import lockImg from "../../images/lock-icon.png";
import showEyeImg from "../../images/showEye.png";
import hideEyeImg from "../../images/hideEye.png";
import "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../Redux/Actions/UserAction";
export default function Login() {
  const [passwordShown, setPasswordShown] = useState(false);

  // Password toggle handler
  const togglePassword = () => {
    // When the handler is invoked
    // inverse the boolean state of passwordShown
    setPasswordShown(!passwordShown);
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkbox, setCheckBox] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userLogin = useSelector((state) => state.login);
  const { loading } = userLogin;

  // Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(email, password, checkbox, navigate));
  };
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      dispatch(login(email, password, checkbox, navigate));
    }
  };

  return (
    <div className="login-page d-flex">
      <div className="login-sec">
        <nav>
          <div className="nav-box">
            <h1>Bellefit</h1>
            <ul>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
        </nav>

        <main>
          <div className="login-box" onKeyDown={handleKeyDown}>
            <h1>Loggin</h1>
            <div className="input-box">
              <span>@</span>
              <input
                type="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="input-box">
              <span>
                <img src={lockImg} alt="" />
              </span>
              <input
                type={passwordShown ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span onClick={togglePassword} className="eyeSlash">
                <img src={passwordShown ? showEyeImg : hideEyeImg} alt="" />
              </span>
            </div>
            <div className="checkbox">
              <input
                type="checkbox"
                value={checkbox}
                onChange={() => setCheckBox(!checkbox)}
              />
              <p>
                I agree with <span>Terms</span> and <span>Privacy</span>{" "}
              </p>
            </div>
            <button
              className="signBtn"
              onClick={handleSubmit}
              disabled={loading}
            >
              {loading ? "LOADING . . ." : "SING IN"}
            </button>
            <h3>
              Forgotten your password?
              <a href="#">
                <span>Click here</span>
              </a>
            </h3>
          </div>
        </main>
      </div>

      <div className="img-box">
        <img src={backImg} alt="" />
      </div>
    </div>
  );
}
