import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function PageNotFound() {
  return (
    <div className="row w-100">
      <div className="col-md-3"></div>
      <div className="col-md-6">
        <div
          style={{ height: "70vh", width: "100%" }}
          className="d-flex justify-content-center align-items-center flex-column"
        >
          <img
            src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif"
            alt="no image" width={'100%'}
          />
          <h1>Looks like you are Lost</h1>

<button className="btn btn-success mt-3"><FontAwesomeIcon icon={faArrowLeft} className="me-2"/>Back to Home</button>
        </div>
      </div>

      <div className="col-md-3"></div>
    </div>
  )
}

export default PageNotFound
