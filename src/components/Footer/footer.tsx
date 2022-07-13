import { useTranslation } from "react-i18next";
import Social from "./social";
import loveIcon from "../../Assets/Images/love.png";
import "./footer.scss";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <div className="footer-container">
      <Social />
      <p className="copyright">
        {t("copyrightText1")}
        <sup>*</sup>
        {t("copyrightText2")}
        <img src={loveIcon} alt="caring love" />
        {t("copyrightText3")}
      </p>
      <p className="star">
        <sup>*</sup>
        {t("copyrightStar")}
      </p>
    </div>
  );
}
