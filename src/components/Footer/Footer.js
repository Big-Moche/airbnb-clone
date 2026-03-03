import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-sections">
        {/* About Section */}
        <div className="footer-column">
          <h4>About</h4>
          <ul>
              <li>added info<li>
            <li>How Airbnb works</li>
            <li>Newsroom</li>
            <li>Investors</li>
            <li>Airbnb Plus</li>
            <li>Airbnb Luxe</li>
          </ul>
        </div>

        {/* Community Section */}
        <div className="footer-column">
          <h4>Community</h4>
          <ul>
            <li>Accessibility</li>
            <li>Airbnb Associates</li>
            <li>Frontline Stays</li>
            <li>Guest Referrals</li>
            <li>Gift cards</li>
          </ul>
        </div>

        {/* Hosting Section */}
        <div className="footer-column">
          <h4>Hosting</h4>
          <ul>
            <li>Try hosting</li>
            <li>AirCover for Hosts</li>
            <li>Explore hosting resources</li>
            <li>Visit our community forum</li>
            <li>How to host responsibly</li>
          </ul>
        </div>

        {/* Support Section */}
        <div className="footer-column">
          <h4>Support</h4>
          <ul>
            <li>Help Centre</li>
            <li>Safety information</li>
            <li>Cancellation options</li>
            <li>Our COVID-19 Response</li>
            <li>Report a neighbourhood concern</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Airbnb Clone — Rearabilwe Moche ✨</p>
        <div className="social-links">
          <a href="#">🌐 Facebook</a>
          <a href="#">🐦 Twitter</a>
          <a href="#">📸 Instagram</a>
        </div>
      </div>
    </footer>
  );
}
