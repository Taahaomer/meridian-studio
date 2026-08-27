import { ArrowRight } from "lucide-react";
import RuleLabel from "../components/RuleLabel.jsx";
import WorkIndex from "../components/WorkIndex.jsx";
import FullWork from "../components/FullWork.jsx";

export default function WorkPage({ setPage }) {
  return (
    <>
      <section className="hero" style={{ paddingBottom: 60 }}>
        <div className="shell hero-inner" style={{ paddingBottom: 0 }}>
          <RuleLabel dark>Work</RuleLabel>
          <h1 style={{ fontSize: 54 }}>A running index of the studio's projects.</h1>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          {/* <WorkIndex setPage={setPage} /> */}
          <FullWork/>
        </div>
      </section>

      <section className="section concrete" style={{ paddingTop: 0 }}>
        <div className="shell">
          <div className="section-head">
            <RuleLabel>In detail</RuleLabel>
            <p>A closer look at recent interiors and finishes.</p>
          </div>
          <div className="gallery">
            <div className="col">
              <div className="gallery-tile">
                <img
                  src="https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=700&q=80"
                  alt="Kitchen detail"
                />
              </div>
              <div className="gallery-tile">
                <img
                  src="https://images.unsplash.com/photo-1600210492493-0946911123ea?w=700&q=80"
                  alt="Bathroom detail"
                />
              </div>
            </div>
            
            <div className="col">
                <div className="gallery-tile">
                  <img
                    src="https://images.unsplash.com/photo-1697462247996-51fdc8a1fe0a?w=700&q=80"
                    alt="Kitchen detail"
                  />
                </div>
                <div className="gallery-tile">
                  <img
                    src="https://images.unsplash.com/photo-1560184897-1ee3713708ee?w=700&q=80"
                    alt="Bathroom detail"
                  />
                </div>
                <div className="gallery-tile">
                  <img
                    src="https://images.unsplash.com/photo-1560185008-b033106af5c3?w=700&q=80"
                    alt="Bathroom detail"
                  />
                </div>
              </div>
          </div>
        </div>
      </section>

      <section className="cta ink">
        <div className="shell" style={{marginTop:'3rem', marginBottom:'2rem'}}>
          <RuleLabel dark>Start a project</RuleLabel>
          <h2 style={{ marginTop: 22 }}>See something close to what you're imagining?</h2>
          <button
            className="pill-btn on-dark"
            style={{ borderColor: "var(--brass)" }}
            onClick={() => setPage("Contact")}
          >
            Get in touch <ArrowRight size={14} />
          </button>
        </div>
      </section>
    </>
  );
}
