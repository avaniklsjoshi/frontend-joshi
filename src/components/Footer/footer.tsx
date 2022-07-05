import loveIcon from "../../Assets/Images/love.png";
import { Github } from "../../Assets/SVG/Github";
import { Gitlab } from "../../Assets/SVG/Gitlab";
import { LinkedIn } from "../../Assets/SVG/LinkedIn";
import { Twitter } from "../../Assets/SVG/Twitter";
import "./footer.scss";

export default function Footer() {
  return (
    <div className="footer-container">
      <a
        href="https://twitter.com/avaniklsjoshi/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Twitter Avani"
        className="social-links"
      >
        <Twitter />
      </a>
      <a
        href="https://www.linkedin.com/in/avani-joshi-6365b887/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn Avani"
        className="social-links"
      >
        <LinkedIn />
      </a>
      <a
        href="https://github.com/avaniklsjoshi"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="github Avani"
        className="social-links"
      >
        <Github />
      </a>
      <a
        href="https://gitlab.com/avaniklsjoshi"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="gitlab Avani"
        className="social-links"
      >
        <Gitlab />
      </a>
      <p className="copyright">
        © 2022, All Rights Reserved. Made with
        <img src={loveIcon} alt="caring love" />
        by Avani Joshi
      </p>
    </div>
  );
}
