import { useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { NAV_ITEMS } from "../data/content.js";

export default function Nav({ page, setPage, dark }) {
  const [open, setOpen] = useState(false);

  return (
    <header className={`nav`}>
      <div className="shell nav-inner">
        <a
          href="#"
          className="logo"
          onClick={(e) => {
            e.preventDefault();
            setPage("Home");
          }}
        >
          MERIDIAN <span>studio</span>
        </a>

        <nav className="navlinks">
          {NAV_ITEMS.map((item) => (
            <button
              key={item}
              className={page === item ? "active" : ""}
              onClick={() => setPage(item)}
            >
              {item}
            </button>
          ))}
        </nav>

        <div className="nav-cta">
          <button className="pill-btn solid" onClick={() => setPage("Contact")}>
            Start a project <ArrowRight size={14} />
          </button>
        </div>

        <button
          className="mobile-toggle"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div
          style={{
            borderTop: "1px solid var(--line-dark)",
            padding: "16px 22px 26px",
            display: "flex",
            flexDirection: "column",
            gap: 4,
          }}
        >
          {NAV_ITEMS.map((item) => (
            <button
              key={item}
              onClick={() => {
                setPage(item);
                setOpen(false);
              }}
              style={{
                textAlign: "left",
                padding: "12px 0",
                fontSize: 16,
                color: page === item ? "var(--brass)" : "inherit",
              }}
            >
              {item}
            </button>
          ))}
          <button
            className="pill-btn solid"
            style={{ marginTop: 10, justifyContent: "center" }}
            onClick={() => {
              setPage("Contact");
              setOpen(false);
            }}
          >
            Start a project <ArrowRight size={14} />
          </button>
        </div>
      )}
    </header>
  );
}
