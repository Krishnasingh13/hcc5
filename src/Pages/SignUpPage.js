import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { signUpDetailsURL } from "../api";
import { authSignUpAction } from "../actions/authAction";
import axios from "axios";

const SignUpPage = () => {
  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    mobile_number: "",
    state:"",
    city: "",
    dob: "",
    height: "",
    languages: "",
    profile: "",
  });

  const dispatch = useDispatch();

  const register = (e) => {
    e.preventDefault();
    dispatch(authSignUpAction(user));
  };

  return (
    <>
      <div className="signup">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6 px-md-0">
              <div className="leftcolumn">
                <img src="./assests/images/sign-up.jpg" alt="" />
              </div>
            </div>
            <div className="col-md-6 px-md-0">
              <div className="rightcolumn">
                <div className="loginlogo">
                  <a href="index.html">
                    <img src="./assests/images/logo.png" alt="" />
                  </a>
                  <h3>Hyderabad Casting Club</h3>
                </div>
                <form onSubmit={register}>
                  <div className="signupform">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="mb-3">
                          <input
                            id="first_name"
                            name="first_name"
                            type="text"
                            onChange={(e) =>
                              setUser({ ...user, first_name: e.target.value })
                            }
                            value={user.first_name}
                            className="form-control"
                            placeholder="First Name"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3">
                          <input
                            id="last_name"
                            name="last_name"
                            type="text"
                            onChange={(e) =>
                              setUser({ ...user, last_name: e.target.value })
                            }
                            value={user.last_name}
                            className="form-control"
                            placeholder="Last Name"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3">
                          <input
                            id="email"
                            type="email"
                            name="email"
                            onChange={(e) =>
                              setUser({ ...user, email: e.target.value })
                            }
                            value={user.email}
                            className="form-control"
                            placeholder="Enter Email"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3">
                          <input
                            id="password"
                            type="password"
                            name="password"
                            onChange={(e) =>
                              setUser({ ...user, password: e.target.value })
                            }
                            value={user.password}
                            className="form-control"
                            placeholder="Enter Password"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3">
                          <input
                            id="mobile-number"
                            type="tel"
                            // pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                            name="mobile_number"
                            onChange={(e) =>
                              setUser({
                                ...user,
                                mobile_number: e.target.value,
                              })
                            }
                            value={user.mobile_number}
                            className="form-control"
                            placeholder="Mobile Number"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3">
                          <input
                            id="gender"
                            type="text"
                            name="gender"
                            onChange={(e) =>
                              setUser({ ...user, gender: e.target.value })
                            }
                            value={user.gender}
                            className="form-control"
                            placeholder="Gender"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3">
                          <input
                            id="height"
                            type="number"
                            name="height"
                            onChange={(e) =>
                              setUser({ ...user, height: e.target.value })
                            }
                            value={user.height}
                            className="form-control"
                            placeholder="Height"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3">
                          <input
                            id="state"
                            type="state"
                            name="state"
                            onChange={(e) =>
                              setUser({ ...user, state: e.target.value })
                            }
                            value={user.state}
                            className="form-control"
                            placeholder="State"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3">
                          <input
                            id="city"
                            type="city"
                            name="city"
                            onChange={(e) =>
                              setUser({ ...user, city: e.target.value })
                            }
                            value={user.city}
                            className="form-control"
                            placeholder="City"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3">
                          <input
                            id="languages"
                            type="text"
                            name="language"
                            onChange={(e) =>
                              setUser({ ...user, languages: e.target.value })
                            }
                            value={user.languages}
                            className="form-control"
                            placeholder="Language"
                          />
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="mb-3">
                          <input
                            id="dob"
                            name="dob"
                            onChange={(e) =>
                              setUser({ ...user, dob: e.target.value })
                            }
                            value={user.dob}
                            className="form-control"
                            placeholder="Date of birth"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3">
                          <input
                            type="file"
                            id="img"
                            name="profile"
                            onChange={(e) =>
                              setUser({ ...user, profile: e.target.value })
                            }
                            value={user.profile}
                            className="form-control"
                            accept="image/*"
                            placeholder="Upload a pic"
                          />
                        </div>
                      </div>

                      <div className="mb-3">
                        <div className="submitbutton submitbutton1">
                          <button type="submit" className="btn ">
                            Submit
                          </button>
                        </div>
                      </div>
                      <div className="mb-3">
                        <div className="loginbutton">
                          <p>
                            Already have an account click
                            <Link to='/signIn'>
                              <button
                                type="button"
                                className="btn "
                                data-bs-toggle="modal"
                                data-bs-target="#staticBackdrop"
                              >
                                Login
                              </button>
                            </Link>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUpPage;
