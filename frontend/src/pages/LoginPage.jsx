import React, { useState } from "react";

/**
 * Meridian Studio — Sign in
 * Minimal credential form built from the site's existing .field / .pill-btn
 * primitives. No branding panel, no social auth, no remember-me.
 */
export default function MeridianLogin(props) {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [showPw, setShowPw] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (user === "admin" && password === "1234") {
        setError(false)
        props.setPage("Admin")
    }
    else {
        setError(true);
    }

  };

  return ( 
    <div className="ms-root login-screen">
      <div className="login-form-wrap fade-up">
        <p className="rule-label">
          <span className="ln" />
          <span className="label" style={{ color: "var(--brass)" }}>
            Welcome back
          </span>
        </p>
        <h2 className="login-h2">Sign in to Admin Dashboard</h2>

        <form onSubmit={handleSubmit} noValidate>
          <div className="field">
            <label className="flabel" htmlFor="ms-user">
              Username
            </label>
            <input
              id="ms-user"
              type="text"
              placeholder="admin"
              value={user}
              onChange={(e) => setUser(e.target.value)}
              required
            />
          </div>

          <div className="field">
            <div className="flabel-row">
              <label className="flabel" htmlFor="ms-password">
                Password
              </label>
            </div>
            <div className="pw-wrap">
              <input
                id="ms-password"
                type={showPw ? "text" : "password"}
                placeholder="••••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="button"
                className="pw-toggle"
                onClick={() => setShowPw((s) => !s)}
                aria-label={showPw ? "Hide password" : "Show password"}
              >
                {showPw ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          <p className={`login-error ${error ? "is-visible" : ""}`}>
            Username or password is incorrect.
          </p>

          <button type="submit" className="pill-btn solid login-submit">
            Log in
            <ArrowIcon />
          </button>
        </form>
      </div>

    </div>
  );
}

function ArrowIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}