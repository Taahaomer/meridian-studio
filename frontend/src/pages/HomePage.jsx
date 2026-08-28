import { ArrowDown, ArrowRight } from "lucide-react";
import RuleLabel from "../components/RuleLabel.jsx";
import WorkIndex from "../components/WorkIndex.jsx";
import { EXPERTISE } from "../data/content.js";
import HowWeWork from "../components/HowWeWork.jsx";
import FeaturedWork from "../components/FeaturedWork.jsx";

export default function HomePage({ setPage }) {
  return (
    <>
      <section className="hero">
        <div className="hero-bg">
          <img
            src="https://i.pinimg.com/1200x/74/aa/4c/74aa4c400b0fec378a5fdc386682a187.jpg" 
            alt=""
            aria-hidden="true"
          />
        </div>
        <div className="shell hero-inner fade-up">
          <RuleLabel dark>Architecture &amp; interior design</RuleLabel>
          <h1>Spaces designed around how people actually live in them.</h1>
          <div className="hero-foot">
            <p>
              Meridian Studio designs residences, hospitality spaces, and cultural
              buildings — grounded in site, material, and daily use.
            </p>
            {/* <div className="scroll-cue">
              <ArrowDown size={14} /> Scroll to explore
            </div> */}
          </div>
        </div>
      </section>
              {/* <br></br><br></br><br></br> */}
     {/* <section className="section">
        <div className="shell">
          <div className="section-head">
            <RuleLabel>Selected work</RuleLabel>
            <p>A running index of recent projects — hover a title to preview.</p>
          </div>
          <WorkIndex setPage={setPage} />
          <div style={{ marginTop: 40 }}>
            <button className="pill-btn" onClick={() => setPage("Work")}>
              View all projects <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </section>  */}
      <HowWeWork/>


      <section className="section ink">
        <div className="shell">
          <div className="section-head">
            <RuleLabel dark>Expertise</RuleLabel>
            <p>Four disciplines, one continuous design process from concept to completion.</p>
          </div>
          <div>
            {EXPERTISE.map((e, i) => (
              <div className="expertise-row" key={e.title}>
                <span className="idx">{String(i + 1).padStart(2, "0")}</span>
                <h3>{e.title}</h3>
                <p>{e.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* <section className="section">
        <div className="shell">
          <div className="section-head">
            <RuleLabel>Recent gallery</RuleLabel>
            <p>Interior and material studies from projects underway this year.</p>
          </div>
          <div className="gallery">
            <div className="gallery-tile">
              <img
                src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1000&q=80"
                alt="Living space with natural light"
              />
            </div>
            <div className="col">
              <div className="gallery-tile">
                <img
                  src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=700&q=80"
                  alt="Material detail"
                />
              </div>
              <div className="gallery-tile">
                <img
                  src="https://images.unsplash.com/photo-1600121848594-d8644e57abab?w=700&q=80"
                  alt="Staircase detail"
                />
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <FeaturedWork/>
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="shell">
          <RuleLabel>In their words</RuleLabel>
          <p className="quote" style={{ marginTop: 26 }}>
            "They understood the house before we did — the way we actually moved through
            it, where the light fell in the morning. What they handed back felt inevitable,
            not designed."
          </p>
          <div className="quote-cite">Owners, Aster House — completed 2025</div>
        </div>
      </section>

      <section className="cta ink">
        <div className="shell">
          <RuleLabel dark>Start a project</RuleLabel>
          <h2 style={{ marginTop: 22 }}>Have a site or a space in mind? Let's talk it through.</h2>
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
