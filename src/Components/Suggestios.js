import React from "react";
import { Link } from "react-router-dom";

const Suggestios = () => {
  return (
    <div>
      <div className="suggestions">
        <div className="allsuggest">
          <h3>Suggestions For You</h3>
          <p>
            <Link to="/search">Sell All</Link>
          </p>
        </div>
        <div className="suggestprofile">
          <div className="row">
            <div className="col-md-8">
              <div className="suggestpeople">
                <img src="./assests/images/profile/sugg-1.png" alt="" />
                <div className="suggestname">
                  <h4>Deepika pilli</h4>
                  <p>
                    <img src="./assests/images/profile/popular.png" alt="" />
                    Popular
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="profile-button middle">
                <h4>+ Follow</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="suggestprofile">
          <div className="row">
            <div className="col-md-8">
              <div className="suggestpeople">
                <img src="./assests/images/profile/sugg-1.png" alt="" />
                <div className="suggestname">
                  <h4>Deepika pilli</h4>
                  <p>
                    <img src="./assests/images/profile/popular.png" alt="" />
                    Popular
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="profile-button middle">
                <h4>+ Follow</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="suggestprofile">
          <div className="row">
            <div className="col-md-8">
              <div className="suggestpeople">
                <img src="./assests/images/profile/sugg-1.png" alt="" />
                <div className="suggestname">
                  <h4>Deepika pilli</h4>
                  <p>
                    <img src="./assests/images/profile/popular.png" alt="" />
                    Popular
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="profile-button middle">
                <h4>+ Follow</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="suggestprofile">
          <div className="row">
            <div className="col-md-8">
              <div className="suggestpeople">
                <img src="./assests/images/profile/sugg-1.png" alt="" />
                <div className="suggestname">
                  <h4>Deepika pilli</h4>
                  <p>
                    <img src="./assests/images/profile/popular.png" alt="" />
                    Popular
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="profile-button middle">
                <h4>+ Follow</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Suggestios;
