import React from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import ProfileInfo from "../Components/ProfileInfo";

import ProfileProject from "../Components/ProfileProject";
import ProfileStatus from "../Components/ProfileStatus";
import Profile from "../Components/Profile";
import ProflieGallery from "../Components/ProflieGallery";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { loadPersonalDetails } from "../actions/personalDetailsAction";
import ScrollTop from "../Components/ScrollTop";

const ViewProfile = () => {
  const pathID = useParams();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadPersonalDetails(pathID.id));
  }, []);

  const { personalDetails, isLoading } = useSelector(
    (state) => state.personalDetails
  );
  const { authDetails,isLoggedIn
   } = useSelector((state) => state.auth);

  console.log(personalDetails);
  // console.log(authDetails);

  return (
    <>
      {!isLoading && (
        <div>
          <Profile />
          <section className="itemtabs">
            <div className="container">
              <div className="tabmenu">
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link active"
                      id="home-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#home"
                      type="button"
                      role="tab"
                      aria-controls="home"
                      aria-selected="true"
                    >
                      Gallery
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="profile-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#profile"
                      type="button"
                      role="tab"
                      aria-controls="profile"
                      aria-selected="false"
                    >
                      Details
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="contact-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#contact"
                      type="button"
                      role="tab"
                      aria-controls="contact"
                      aria-selected="false"
                    >
                      Previous Projects
                    </button>
                  </li>
                </ul>
                <div className="tab-content" id="myTabContent">
                  <div
                    className="tab-pane fade show active"
                    id="home"
                    role="tabpanel"
                    aria-labelledby="home-tab"
                  >
                    <ProflieGallery />
                  </div>
                  <div
                    className="tab-pane fade"
                    id="profile"
                    role="tabpanel"
                    aria-labelledby="profile-tab"
                  >
                    <div className="profile-gallery profile-details">
                      <div className="candidate-gallery">
                        <div className="actor-details">
                          <h3>Actor Details</h3>
                        </div>
                        {isLoggedIn && (
                          <div className="editbutton">
                            <Link to="/editProfile">
                              Edit
                              <i className="bi bi-pencil"></i>
                            </Link>
                          </div>
                        )}
                      </div>
                      <ProfileInfo />
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="contact"
                    role="tabpanel"
                    aria-labelledby="contact-tab"
                  >
                    <ProfileProject />
                  </div>
                </div>
              </div>
            </div>
          </section>
          <ScrollTop />
        </div>
      )}
    </>
  );
};

export default ViewProfile;
