import React from "react";
import "../Scss/footer.scss";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <div className="footer-contents">
          <div className="footer-logo">
            <Link to="/home">
              <h1>Home</h1>
            </Link>
          </div>
          <div className="footer-links">
            <p>Quick Links</p>
            <div className="Quick-links">
              <a href="/">Home</a>
              <a href="khadkarupesh818@gmail.com">Support</a>
              <a href="khadkarupesh818@gmail.com">Report an issue</a>
            </div>
          </div>
          <div className="footer-sites">
            <p>Find me on</p>
            <div className="social-media">
              <a href="#" target="_blank">
                Bad
              </a>
              <a href="#" target="_blank">
                Dad
              </a>
              <a href="#" target="_blank">
                Mad
              </a>
            </div>
          </div>
        </div>

        <div className="copyright-container">
          <div className="copyright-items">
            <div className="footer-copyright-l">
              Copyright @2023 Onlinestore
            </div>
            <div className="footer-copyright-r">
              <a href="/terms">
                <p>Terms of Use</p>
              </a>
              <a href="/terms">
                <p>Privacy Policy</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
