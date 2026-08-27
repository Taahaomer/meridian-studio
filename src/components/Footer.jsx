import { Instagram, Linkedin } from "lucide-react";
import { EXPERTISE } from "../data/content.js";

export default function Footer({ setPage }) {
  return (
    <footer className="footer">
      <div className="shell">
        <div className="footer-grid">
          <div>
            <div className="logo" style={{ color: "var(--paper)" }}>
              MERIDIAN <span>studio</span>
            </div>
            <p style={{ fontSize: 13.5, lineHeight: 1.65, maxWidth: 260, marginTop: 16 }}>
              An architecture and interior design studio working on considered
              residential, hospitality, and cultural projects.
            </p>
            <div className="social-row">
              <a href="#">
                <Instagram size={15} />
              </a>
              <a href="#">
                <Linkedin size={15} />
              </a>
            </div>
          </div>

          <div>
            <h5>Studio</h5>
            <ul>
              <li>
                <a href="#" onClick={(e) => { e.preventDefault(); setPage("Studio"); }}>
                  About
                </a>
              </li>
              <li>
                <a href="#" onClick={(e) => { e.preventDefault(); setPage("Work"); }}>
                  Work
                </a>
              </li>
              <li>
                <a href="#" onClick={(e) => { e.preventDefault(); setPage("Contact"); }}>
                  Contact
                </a>
              </li>
              <li>
                <a href="#" onClick={(e) => { e.preventDefault(); setPage("Login"); }}>
                  Login
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h5>Expertise</h5>
            <ul>
              {EXPERTISE.map((e) => (
                <li key={e.title}>{e.title}</li>
              ))}
            </ul>
          </div>

          <div>
            <h5>Contact</h5>
            <ul>
              <li>hello@meridian-studio.com</li>
              <li>+1 (646) 555-0119</li>
              <li>118 Grand St, New York</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 Meridian Studio. All rights reserved.</span>
          <span>Architecture &amp; interior design, New York</span>
        </div>
      </div>
    </footer>
  );
}
