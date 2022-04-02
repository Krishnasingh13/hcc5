import React, { useEffect } from "react";
import Home from "./Pages/Home";
import SearchPage from "./Pages/SearchPage";
import ViewProfile from "./Pages/ViewProfile";
import { Routes, Route, Link, Redirect } from "react-router-dom";
import Nav from "./Components/Nav";
import EditProfile from "./Pages/EditProfile";
import { useSelector } from "react-redux";
import SignInPage from "./Pages/SignInPage";
import SignUpPage from "./Pages/SignUpPage";

const App = () => {
  const { search } = useSelector((state) => state.profile);

  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/search" element={<SearchPage />}></Route>
        <Route path="/:id" element={<ViewProfile />}></Route>
        <Route path="/editProfile" element={<EditProfile />}></Route>
        <Route path="/signUp" element={<SignUpPage />}></Route>
        <Route path="/signIn" element={<SignInPage />}></Route>
      </Routes>
    </div>
  );
};

export default App;
