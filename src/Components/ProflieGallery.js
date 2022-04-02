import React from "react";
import Simg from "./Simg";
import { useSelector } from "react-redux";

const ProflieGallery = () => {
  const { modelImagesDetails } = useSelector((state) => state.personalDetails);

  return (
    <div>
      <div className="profile-gallery">
        <div className="candidate-gallery">
          <div className="row">
            {modelImagesDetails?.length > 0 ? (
              modelImagesDetails.map((details, i) => (
                <Simg key={i} details={details} />
              ))
            ) : (
              <div className="col-md-5"></div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProflieGallery;
