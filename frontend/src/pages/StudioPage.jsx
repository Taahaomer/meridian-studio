import { ArrowRight } from "lucide-react";
import RuleLabel from "../components/RuleLabel.jsx";
import { PROCESS, TEAM } from "../data/content.js";

export default function StudioPage({ setPage }) {
  return (
    <>
      <section className="hero" style={{ paddingBottom: 0 }}>
        <div className="shell hero-inner" style={{ paddingBottom: 70 }}>
          <RuleLabel dark>The studio</RuleLabel>
          <h1 style={{ fontSize: 58 }}>
            Fourteen years of designing spaces that hold up to daily life.
          </h1>
          <p
            style={{
              maxWidth: 560,
              color: "var(--stone-light)",
              fontSize: 16,
              lineHeight: 1.7,
              marginTop: 24,
            }}
          >
            Meridian Studio was founded in New York by Elena Voss, and has since grown
            into a small team working across residential, hospitality, and cultural
            architecture — always led by how a space will actually be used, not just
            how it will photograph.
          </p>
        </div>
        <div className="shell">
          <div className="stat-strip">
            <div className="stat-cell">
              <div className="num">14</div>
              <div className="lbl">Years in practice</div>
            </div>
            <div className="stat-cell">
              <div className="num">62</div>
              <div className="lbl">Projects completed</div>
            </div>
            <div className="stat-cell">
              <div className="num">18</div>
              <div className="lbl">Design awards</div>
            </div>
            <div className="stat-cell">
              <div className="num">12</div>
              <div className="lbl">Studio members</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <div className="section-head">
            <RuleLabel>Our process</RuleLabel>
            <p>Every project moves through the same four stages, at a pace the client sets.</p>
          </div>
          <div className="process-grid">
            {PROCESS.map((p) => (
              <div className="process-cell" key={p.n}>
                <div className="idx">{p.n}</div>
                <h4>{p.title}</h4>
                <p>{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="shell">
          <div className="section-head">
            <RuleLabel>The team</RuleLabel>
            <p>Principals leading design and delivery across the studio's active projects.</p>
          </div>
          <div className="team-grid">
            {TEAM.map((t) => (
              <div className="team-card" key={t.name}>
                <img src={t.img} alt={t.name} />
                <h4>{t.name}</h4>
                <p>{t.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta ink">
        <div className="shell">
          <RuleLabel dark>Work with us</RuleLabel>
          <h2 style={{ marginTop: 22 }}>Bring the studio your next site.</h2>
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
