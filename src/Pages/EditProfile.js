import React from "react";
import { Link } from "react-router-dom";
import Profile from "../Components/Profile";
import ProfileInfo from "../Components/ProfileInfo";
import ProfileProject from "../Components/ProfileProject";
import ProfileStatus from "../Components/ProfileStatus";
import ProflieGallery from "../Components/ProflieGallery";

const EditProfile = () => {
  return (
    <>
      <nav
        className="navbar navbar-expand navbar-dark navmenu"
        aria-label="Second navbar example"
      >
        <div className="container">
          <a className="navbar-brand" href="index.html">
            <img src="./assests/images/logo.png" alt="" />
          </a>
          <div className="searchform">
            <form>
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search for Artist"
                  aria-label="Search for Artist"
                  aria-describedby="button-addon2"
                />
                <button
                  className="btn searchbutton"
                  type="button"
                  id="button-addon2"
                >
                  <i className="fas fa-search"></i>
                </button>
              </div>
            </form>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarsExample02"
            aria-controls="navbarsExample02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse menu" id="navbarsExample02">
            <ul className="navbar-nav me-auto mb-2 mb-sm-0">
              <li className="nav-item">
                <Link className="nav-link active" to="/">
                  <i className="bi bi-house-door"></i>
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <i className="bi bi-images"></i>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <i className="bi bi-bell"></i>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <i className="bi bi-chat-left-text"></i>
                </a>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/create">
                  <i className="bi bi-person-plus"></i>
                </Link>
              </li>
              <div className="flex-shrink-0 dropdown">
                <a
                  href="#"
                  className="d-block link-dark text-decoration-none dropdown-toggle"
                  id="dropdownUser2"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img
                    src="./assests/images/profile/img-1.png"
                    alt="mdo"
                    width="32"
                    height="32"
                    className="rounded-circle"
                  />
                </a>
                <ul
                  className="dropdown-menu text-small shadow"
                  aria-labelledby="dropdownUser2"
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      Profile
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Saved
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Settings
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Logout
                    </a>
                  </li>
                </ul>
              </div>
            </ul>
          </div>
        </div>
      </nav>
      <Profile />
      <ProfileStatus />
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
                    <div className="editbutton">
                      <Link to="/editProfile">
                        Edit
                        <i className="bi bi-pencil"></i>
                      </Link>
                    </div>
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
    </>
  );
};

export default EditProfile;
