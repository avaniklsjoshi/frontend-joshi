import { Tooltip } from "@mui/material";
import { useState } from "react";
import { Github } from "../../Assets/SVG/Github";
import { Gitlab } from "../../Assets/SVG/Gitlab";
import { LinkedIn } from "../../Assets/SVG/LinkedIn";
import { Share } from "../../Assets/SVG/Share";
import { Twitter } from "../../Assets/SVG/Twitter";

import "./footer.scss";

export default function Social() {
  const [open, setOpen] = useState(false);

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setOpen(true);
    setTimeout(() => {
      setOpen(false);
    }, 3000);
  };
  return (
    <>
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
      <Tooltip
        PopperProps={{
          disablePortal: true
        }}
        open={open}
        disableFocusListener
        disableHoverListener
        disableTouchListener
        title="Link Copied!"
      >
        <button onClick={handleShare} className="share-button">
          <Share />
        </button>
      </Tooltip>
    </>
  );
}
