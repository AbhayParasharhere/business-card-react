import React from "react";
import TwitterIcon from "../images/Twitter Icon.png";
import FacebookIcon from "../images/Facebook Icon.png";
import InstagramIcon from "../images/Instagram Icon.png";
import GithubIcon from "../images/GitHub Icon.png";

export default function Footer() {
  return (
    <footer>
      <img src={TwitterIcon} width="25px" />
      <img src={FacebookIcon} width="25px" />
      <img src={InstagramIcon} width="25px" />
      <img src={GithubIcon} width="25px" />
    </footer>
  );
}
