import React from "react";
import { Link } from "react-router-dom";

const Feed = ({ user }) => {
  return (
    <div className="index-profile" key={user.uid}>
      <div className="profile-image">
        <div className="row">
          <div className="profile-head">
            <div className="col-md-8">
              <div className="candiate-profile">
                <img src={user.profile_pic} alt="" />
                <div className="candiate-details middle">
                  <h3>
                    <Link to={"/" + user.id}>
                      {user.user.first_name} {user.user.last_name}
                    </Link>
                  </h3>
                  {user.address !== null ? (
                    <p key={user.address.id}>
                      {user.address.present_state.state_name}
                    </p>
                  ) : (
                    <p key={user.address}>{user.address}</p>
                  )}
                  <p className="idname">{user.id}</p>
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
        <div className="center-image">
          <div className="row">
            <div className="col-md-12">
              <img
                src={`https://hyderabadcastingclub.com${user.display_image.image_url}`}
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="profile-bottom">
          <div className="action-button">
            <div className="like">
              <i className="bi bi-hand-thumbs-up"></i>
              <p>like</p>
            </div>
            <div className="like">
              <i className="bi bi-chat-left-text"></i>
              <p>Comment</p>
            </div>
            <div className="like">
              <i className="bi bi-share"></i>
              <p>Share</p>
            </div>
            <div className="like">
              <div className="btn-group dropup">
                <button
                  type="button"
                  className="btn dropdown-toggle"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="bi bi-three-dots"></i>
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Save
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Short List
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Follow
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="numberoflikes">
            <p>
              <b>
                <a href="#">{user.display_image.likes} likes</a>
              </b>
            </p>
            {user.display_image.caption !== null ? (
              <p>
                {user.first_name}:{user.display_image.caption}
              </p>
            ) : (
              <p></p>
            )}
            <p>
              <a href="#">{user.display_image.comments} Comments...</a>
            </p>
          </div>
          <div className="writecomment">
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Write a comment"
                aria-label="Write a comment"
              />
              <button className="btn " type="button">
                <a href="#">
                  <i className="bi bi-emoji-smile"></i>
                </a>
              </button>
              <button className="btn " type="button">
                <a href="#">
                  <i className="bi bi-send"></i>
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feed;
