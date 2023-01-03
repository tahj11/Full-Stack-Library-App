import React from "react";
import "./banner.css";
import CloseIcon from "@mui/icons-material/Close";

function Banner() {
  return (
    <div className="banner">
      <div className="banner_content">
        <div className="banner-text">
          <strong>Sale!</strong> on all books from the Fiction Section
        </div>
        {/* <CloseIcon className="banner-icon" /> */}
      </div>
    </div>
  );
}

export default Banner;
