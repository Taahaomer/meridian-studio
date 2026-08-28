import React, { useState } from "react";
import Loader from "./Loader";
/**
 * CreateEmployeeModal
 *
 * Drop this into your project alongside your existing "team-modal" CSS
 * (the classes .team-overlay, .team-modal, .team-modal-h2, .team-modal-actions
 * you already have). It renders a form with Name / Position / Email fields
 * and POSTs the data to http://localhost:3000/createemployee.
 *
 * Usage:
 *   const [open, setOpen] = useState(false);
 *   <button onClick={() => setOpen(true)}>Add an employee</button>
 *   {open && (
 *     <CreateEmployeeModal
 *       onClose={() => setOpen(false)}
 *       onCreated={(employee) => {
 *         // e.g. add to your local table state
 *         setEmployees(prev => [...prev, employee]);
 *         setOpen(false);
 *       }}
 *     />
 *   )}
 */
export default function CreateEmployeeModal({ onClose, URL, loadAllEmployees }) {
  const [formData, setFormData] = useState({
    name: "",
    position: "",
    email: "",
  });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [serverError, setServerError] = useState("");

  const handleChange = (field) => (e) => {
    setFormData((prev) => ({ ...prev, [field]: e.target.value }));
    // clear the field error as soon as the user edits it
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const validate = () => {
    const next = {};
    if (!formData.name.trim()) next.name = "Name is required";
    if (!formData.position.trim()) next.position = "Position is required";
    if (!formData.email.trim()) {
      next.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      next.email = "Enter a valid email address";
    }
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setServerError("");

    if (!validate()) return;

    setSubmitting(true);
    try {
      const res = await fetch(`${URL}createemployee`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data?.error || "Failed to create employee");
      }

      onCreated?.(data);
    } catch (err) { 
      setServerError(err.message || "Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
      onClose();
      loadAllEmployees();
    }
  };

  // close when clicking the dark overlay (not the modal itself)
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) onClose?.();
  };

  return (
    <div className="team-overlay" onClick={handleOverlayClick}>
      <div className="team-modal fade-up" role="dialog" aria-modal="true" aria-labelledby="create-employee-title">
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <span style={{ display: "inline-block", width: 24, height: 1, background: "var(--brass)" }} />
          <span
            style={{
              fontSize: 12,
              letterSpacing: "0.12em",
              color: "var(--brass)",
              fontWeight: 600,
              textTransform: "uppercase",
            }}
          >
            Add Employee
          </span>
        </div>

        <h2 className="team-modal-h2" id="create-employee-title">
          New team member
        </h2>

        { (!submitting) ? <form onSubmit={handleSubmit} noValidate>
          <FormField
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange("name")}
            placeholder="e.g. Jane Doe"
            error={errors.name}
          />

          <FormField
            label="Position"
            name="position"
            value={formData.position}
            onChange={handleChange("position")}
            placeholder="e.g. Developer"
            error={errors.position}
          />

          <FormField
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange("email")}
            placeholder="e.g. jane@studio.com"
            error={errors.email}
          />

          {serverError && (
            <p style={{ color: "#a13d2e", fontSize: 13, marginTop: 4 }}>{serverError}</p>
          )}

          <div className="team-modal-actions">
            <button
              type="button"
              className="btn-secondary"
              onClick={onClose}
              disabled={submitting}
            >
              Cancel
            </button>
            <button type="submit" className="btn-primary" disabled={submitting}>
              {submitting ? "Saving…" : "Save changes"}
            </button>
          </div>
        </form> : <Loader /> }
      </div>
    </div>
  );
}

function FormField({ label, name, value, onChange, placeholder, error, type = "text" }) {
  return (
    <div style={{ marginBottom: 24 }}>
      <label
        htmlFor={name}
        style={{
          display: "block",
          fontSize: 12,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          color: "var(--stone)",
          marginBottom: 8,
        }}
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        style={{
          width: "100%",
          border: "none",
          borderBottom: `1px solid ${error ? "#a13d2e" : "rgba(0,0,0,0.15)"}`,
          padding: "8px 0",
          fontSize: 16,
          background: "transparent",
          outline: "none",
        }}
      />
      {error && (
        <p style={{ color: "#a13d2e", fontSize: 12, marginTop: 6 }}>{error}</p>
      )}
    </div>
  );
}