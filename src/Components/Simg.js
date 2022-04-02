import React from "react";

const Simg = ({details}) => {
  // console.log(details)
  return (
    <div className="col-md-3">
      <div>
        <div className="galley-image">
          <img
            className="modal-target"
            src={details.image}
          />
        </div>
      </div>
    </div>
  );
};

export default Simg;
