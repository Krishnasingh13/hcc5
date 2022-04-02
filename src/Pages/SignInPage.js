import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authLoginAction, authSignInAction } from "../actions/authAction";
import { loadSearch } from "../actions/profileAction";
import { useSelector } from "react-redux";

const SignInPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { authDetails, isLoggedIn } = useSelector((state) => state.auth);
    const navigate = useNavigate();

//   console.log(authDetails);
  const dispatch = useDispatch();

  const onLogin = (e) => {
    e.preventDefault();
    const data = {
      username: username,
      password: password,
    };
    dispatch(authSignInAction(data));
  };
  if (isLoggedIn) {
    navigate("/");
  } else {
    
  }

  // console.log(auth);

  return (
    <div className="loginmodal">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <div className="loginlogo">
              <img src="./assests/images/logo.png" alt="" />
            </div>
          </div>
          <div className="modal-body">
            <form onSubmit={onLogin}>
              <h3>Hyderabad Casting Club</h3>
              <div className="mb-3">
                <input
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="ID,email, or phonenumber"
                />
              </div>
              <div className="mb-3">
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Enter your password"
                />
              </div>
              <div className="mb-3">
                <div className="submitbutton">
                  <a href=""></a>
                  <button type="submit" className="btn ">
                    Submit
                  </button>
                </div>
              </div>
              <div className="mb-1">
                <div className="forgotpassword">
                  <a href="#">
                    <p>Forgot Password?</p>
                  </a>
                </div>
              </div>
              <div className="mb-3">
                <div className="forgotpassword signup">
                  <p>
                    Don't have an account?
                    <Link to='/signUp'>
                      <span>Sign up</span>
                    </Link>
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
