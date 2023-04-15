import React from "react";
import profile from "../images/Profile.png";
import MailIcon from "../images/MailIcon.png";
import LinkenInIcon from "../images/LinkednIcon.png";

export default function Header() {
  return (
    <header>
      <img src={profile} width="317px" className="header--profile-picture" />
      <h1 className="header--name">Laura Smith</h1>
      <span className="header--job-title">Frontend Developer</span>
      {/* <br /> */}
      <a href="" className="header--website-link">
        laurasmith.website
      </a>
      {/* Add Button Component here */}
      <div className="header--buttons-container">
        <div className="header--button header--button-mail">
          <img src={MailIcon} className="header---icon" width="13px" />
          <span>Email</span>
        </div>
        <div className="header--button header--button-linkedin">
          <img src={LinkenInIcon} className="header---icon" width="13px" />
          <span>LinkedIn</span>
        </div>
      </div>
    </header>
  );
}
