import React from "react";
import "./footer.style.css";

export default function Footer() {
  return (
    <>
      <footer className="footer-container">
        <div className="footer-top-container">
          <p className="footer-item">
            Top companies choose Pubdemy business to build in-demand career
            skills
          </p>
          <div className="footer-right brand-partners">
            <p className="footer-item brand-partners">brand1</p>
            <p className="footer-item brand-partners">
              <i className="fa-solid fa-globe" /> Box
            </p>
            <p className="footer-item brand-partners">
              <i className="fa-solid fa-map" /> NetApp
            </p>
            <p className="footer-item brand-partners">brand1</p>
          </div>
        </div>
        <div className="footer-bottom-container">
          <div className="footer-bottom-left">
            <div className="footer-lists">Pubdemy Business</div>
            <div className="footer-lists">teach on pubdemy</div>
            <div className="footer-lists">About Us</div>
            <div className="footer-lists">Blog</div>
            <div className="footer-lists">Help and Support</div>
            <div className="footer-lists">Cookies Settings</div>
            <div className="footer-lists">Contact us</div>
            <div className="footer-lists">Investers</div>
            <div className="footer-lists">Accessibility statement</div>
            <div className="footer-lists">SiteMap</div>
            <div className="footer-lists">Get the App</div>
          </div>
          <div className="footer-bottom-right">
            <button className="footer-language">English</button>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-bottom-items">
            <h2>Pubdemy</h2>
          </div>
          <div className="footer-bottom-items last-item">
            @2023 Pubdemy, inc
          </div>
        </div>
      </footer>
    </>
  );
}
