import { useState } from "react";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import RuleLabel from "../components/RuleLabel.jsx";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <section className="hero" style={{ paddingBottom: 70 }}>
        <div className="shell hero-inner" style={{ paddingBottom: 0 }}>
          <RuleLabel dark>Contact</RuleLabel>
          <h1 style={{ fontSize: 54 }}>Tell us about your site.</h1>
        </div>
      </section>

      <section className="section">
        <div className="shell contact-wrap">
          <div>
            {submitted ? (
              <div style={{ padding: "40px 0" }}>
                <h3 style={{ fontFamily: "Fraunces", fontSize: 26, fontWeight: 400, marginBottom: 12 }}>
                  Thank you.
                </h3>
                <p style={{ color: "var(--stone)", fontSize: 15 }}>
                  A studio member will follow up within two business days.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="field">
                  <label className="flabel">Name</label>
                  <input type="text" placeholder="Your full name" required />
                </div>
                <div className="field">
                  <label className="flabel">Email</label>
                  <input type="email" placeholder="you@example.com" required />
                </div>
                <div className="field">
                  <label className="flabel">Project type</label>
                  <select required defaultValue="">
                    <option value="" disabled>
                      Select one
                    </option>
                    <option>New residence</option>
                    <option>Renovation</option>
                    <option>Hospitality</option>
                    <option>Workplace</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="field">
                  <label className="flabel">Tell us about the site</label>
                  <textarea rows="5" placeholder="Location, size, and what you have in mind" required />
                </div>
                <button
                  className="pill-btn solid"
                  type="submit"
                  style={{ width: "100%", justifyContent: "center", padding: "16px 22px" }}
                >
                  Send inquiry <ArrowRight size={15} />
                </button>
              </form>
            )}
          </div>

          <div>
            <RuleLabel>Studio</RuleLabel>
            <div style={{ marginTop: 8 }}>
              <div className="info-row">
                <MapPin size={19} strokeWidth={1.5} />
                <div>
                  <h4>New York</h4>
                  <p>118 Grand St, New York, NY 10013</p>
                </div>
              </div>
              <div className="info-row">
                <Mail size={19} strokeWidth={1.5} />
                <div>
                  <h4>Email</h4>
                  <p>hello@meridian-studio.com</p>
                </div>
              </div>
              <div className="info-row">
                <Phone size={19} strokeWidth={1.5} />
                <div>
                  <h4>Phone</h4>
                  <p>+1 (646) 555-0119</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
