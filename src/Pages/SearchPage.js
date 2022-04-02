import React from "react";
import { Link } from "react-router-dom";
import Filter from "../Components/Filter";
import SearchProfile from "../Components/SearchProfile";
import { useSelector } from "react-redux";
import { loadSearch } from "../actions/profileAction";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import Feed from "../Components/Feed";

import ScrollTop from "../Components/ScrollTop";

const SearchPage = () => {
  const { search } = useSelector((state) => state.profile);
  const { filterDetails } = useSelector((state) => state.filter);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadSearch());
  }, [dispatch]);

  // var page = 0;

  // const handleScroll = (e) => {
  //   if (
  //     window.innerHeight + e.target.documentElement.scrollTop + 1 >=
  //     e.target.documentElement.scrollHeight
  //   ) {
  //     page = page + 10;
  //     dispatch(loadSearch(page));
  //   }
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  // }, [dispatch]);
  console.log(filterDetails);

  return (
    <>
      <div>
        <ScrollTop />
        <section className="postcard search-candidates">
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-md-3">
                <Filter />
              </div>
              <div className="col-md-9">
                <div className="search-profile">
                  <div className="row ">
                    {filterDetails?.length > 0 ? (
                        filterDetails.map((i, user) => (
                          <SearchProfile key={i} user={user} />
                        ))
                    ) : (
                        search.map((user, i) => (
                          <SearchProfile key={i} user={user} />
                        ))
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default SearchPage;
