import React from "react";
import { Github } from "../../Assets/SVG/Github";
import { Gitlab } from "../../Assets/SVG/Gitlab";
import { LinkedIn } from "../../Assets/SVG/LinkedIn";
import { Twitter } from "../../Assets/SVG/Twitter";

export default function Footer() {
  return (
    <div>
      <a
        href="https://twitter.com/avaniklsjoshi/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Twitter Avani"
      >
        <Twitter />
      </a>
      <a
        href="https://www.linkedin.com/in/avani-joshi-6365b887/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn Avani"
      >
        <LinkedIn />
      </a>
      <a
        href="https://github.com/avaniklsjoshi"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="github Avani"
      >
        <Github />
      </a>
      <a
        href="https://gitlab.com/avaniklsjoshi"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="gitlab Avani"
      >
        <Gitlab />
      </a>
      Copyrights
    </div>
  );
}
