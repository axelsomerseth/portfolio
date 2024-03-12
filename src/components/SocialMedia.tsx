import React from "react";

function SocialMedia() {
  return (
    <div className="social-media">
      <a href="#" target="_blank">
        <img
          src="assets/icons/icons8-twitter-circled.gif"
          alt="Twitter"
          loading="lazy"
          className="socicon"
        />
      </a>
      <a href="#" target="_blank">
        <img
          src="assets/icons/icons8-instagram.gif"
          alt="Instagram"
          loading="lazy"
          className="socicon"
        />
      </a>
      <a href="#" target="_blank">
        <img
          src="assets/icons/icons8-linkedin-circled.gif"
          alt="Linkedin"
          loading="lazy"
          className="socicon"
        />
      </a>
      <a href="#" target="_blank">
        <img
          src="assets/icons/icons8-github.gif"
          alt="Github"
          className="socicon"
        />
      </a>
    </div>
  );
}

export default SocialMedia;
