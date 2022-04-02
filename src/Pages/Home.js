import React from "react";
import { Link } from "react-router-dom";
import Feed from "../Components/Feed";
import Filter from "../Components/Filter";
import Nav from "../Components/Nav";
import Policies from "../Components/Policies";
import ProfileStatus from "../Components/ProfileStatus";
import Suggestios from "../Components/Suggestios";
import Upcoming from "../Components/Upcoming";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadProfile } from "../actions/profileAction";
import ScrollTop from "../Components/ScrollTop";

const Home = () => {
  // const [page, setPage] = useState(0);

  const { profile } = useSelector((state) => state.profile);
  const { filterDetails } = useSelector((state) => state.filter);
  // console.log(page)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadProfile(page));
  }, [dispatch]);

  var page = 0;

  const handleScroll = (e) => {
    if (
      window.innerHeight + e.target.documentElement.scrollTop + 1 >=
      e.target.documentElement.scrollHeight
    ) {
      page = page + 10;
      dispatch(loadProfile(page));
    }
  };

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  // }, [dispatch]);

  return (
    <>
      {/* <ProfileStatus /> */}
      <section className="postcard">
        <div className="container" style={{ marginTop: "6rem" }}>
          <div className="row justify-content-between">
            <div className="col-md-3">
              <Filter />
            </div>
            {profile?.length > 0 ? (
              <div id="feeds" onScroll={handleScroll} className="col-md-5">
                {profile.map((user, i) => (
                  <Feed key={i} user={user} />
                ))}
              </div>
            ) : (
              <div id="feeds" className="col-md-5">
                <h1>Loading...</h1>
              </div>
            )}
            <div className="col-md-4 second-column">
              <div className="second-slide">
                <Upcoming />
                <Suggestios />
                <Policies />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
