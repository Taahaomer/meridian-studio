import React, { useState, useMemo, useEffect } from "react";
import { Plus } from "lucide-react";
import Loader from "../components/Loader";
import AddEmployee from "../components/AddEmployee"

/**
 * Meridian Studio — Team directory (admin)
 * Built from the same tokens as the public site: Fraunces display type,
 * hairline rules, brass accent, paper/ink surfaces. The row-list pattern
 * mirrors .work-row / .expertise-row already used on the site, so this
 * reads as the same product, just behind the login.
 */


const URL = "http://localhost:3000/"

export default function AdminPage(props) {



  const [employees, setEmployees] = useState([]);
  const [query, setQuery] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [draft, setDraft] = useState(null);
  const [deleteId, setDeleteId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [loadingAll, setLoadingAll] = useState(false);
  const [adding, setAdding] = useState(false)
  const [serverError, setServerError] = useState("");

  useEffect(() => {

      loadAllEmployees()

  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return employees;
    return employees.filter(
      (e) =>
        e.name.toLowerCase().includes(q) ||
        e.position.toLowerCase().includes(q) ||
        e.email.toLowerCase().includes(q)
    );
  }, [employees, query]);

  
    async function loadAllEmployees() {
    try {
        setEmployees([])
        setLoadingAll(true)
        const response = await fetch(`${URL}allemployees`);
        const employeeList = await response.json();
        
        setLoadingAll(false)
        setEmployees(employeeList); // Update state directly here when data arrives
    } catch (error) {
        console.error("Failed to load employees", error);
    }
    }
  const startEdit = (emp) => {
    setEditingId(emp._id);
    setDraft({ ...emp });
  };

  const cancelEdit = () => {
    setEditingId(null);
    setDraft(null);
  };

  const saveEdit = async (e) => {
    setServerError("");
    console.log(JSON.stringify(draft))
    e.preventDefault();
    try {
      setLoading(true)
      const res = await fetch(`${URL}updateemployee/${editingId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(draft),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data?.error || "Failed to create employee");
      }
      setLoading(false)
      cancelEdit();
      loadAllEmployees()
    } catch (err) {
      setServerError(err.message || "Something went wrong. Please try again.");
    }
    // setEmployees((prev) => prev.map((emp) => (emp._id === editingId ? { ...draft } : emp)));
    cancelEdit();
  };

  const confirmDelete = async (e) => {
    setServerError("");
    e.preventDefault()
      try {
      const res = await fetch(`${URL}deleteemployee/${deleteId}`, {
        method: "DELETE"
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data?.error || "Failed to delete employee");
      }
      loadAllEmployees();
    } catch (err) {
      setServerError(err.message || "Something went wrong. Please try again.");
    }
    // setEmployees((prev) => prev.filter((emp) => emp.id !== deleteId));
    setDeleteId(null);
  };

  const employeeToDelete = employees.find((e) => e._id === deleteId);
  
  const onClose=() => {setAdding(false)}

  return (
  <>
    
    <div className="ms-root team-screen">
      <div className="shell team-wrap fade-up">
        <p className="rule-label">
          <span className="ln" />
          <span className="label" style={{ color: "var(--brass)" }}>
            Meridian Studio
          </span>
        </p>
        <div className="team-head">
          <h1 className="team-h1">Team directory</h1>
          <span className="team-count">
            {filtered.length} of {employees.length}
          </span>
        </div>

        {/* ---- search ---- */}
        <div className="search-body"> 
            <div className="team-search">
              <SearchIcon />
              <input
                  type="text"
                  placeholder="Search by name, position or email"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  aria-label="Search employees"
              />
              {query && (
                  <button
                  type="button"
                  className="team-search-clear"
                  onClick={() => setQuery("")}
                  aria-label="Clear search"
                  >
                  <CloseIcon />
                  </button>
              )}
            </div>

            <div id="add-emp">
              <button className="pill-btn solid" onClick={()=> {setAdding(true)}} >
                Add an employee <Plus size={20} />
              </button>
            </div>
        </div>
        {/* ---- table ---- */}
        
        <div className="team-table">
          <div className="team-row team-row-head">
            <span className="label">Name</span>
            <span className="label">Position</span>
            <span className="label">Email</span>
            <span className="label team-actions-head">Actions</span>
          </div>

          <div>
            {loadingAll ? <Loader/> : ""}
          </div>
          
          {filtered.length === 0 && (
            <div className="team-empty">
              No one matches “{query}”. Try a different name, role, or department.
            </div>
          )}

          {filtered.map((emp) => (
            <div className="team-row" key={emp._id}>
              <span className="team-name">{emp.name}</span>
              <span className="team-role">{emp.position}</span>
              <span className="team-email">{emp.email}</span>
              <span className="team-actions">
                <button
                  type="button"
                  className="icon-btn"
                  onClick={() => startEdit(emp)}
                  aria-label={`Edit ${emp.name}`}
                >
                  <EditIcon />
                </button>
                <button
                  type="button"
                  className="icon-btn danger"
                  onClick={() => {setDeleteId(emp._id);setServerError("")}}
                  aria-label={`Delete ${emp.name}`}
                >
                  <TrashIcon />
                </button>
              </span>
            </div>
          ))}
        </div>

      </div>

      {/* ---- add employee modal ---- */}
      {adding && <AddEmployee onClose={onClose} URL={URL}  loadAllEmployees={loadAllEmployees}/>}
      

      {/* ---- edit modal ---- */}
      {editingId !== null && draft && (
        <div className="team-overlay" onClick={cancelEdit}>
          <div className="team-modal" onClick={(e) => e.stopPropagation()}>
            <p className="rule-label">
              <span className="ln" />
              <span className="label" style={{ color: "var(--brass)" }}>
                Edit member
              </span>
            </p>
            <h2 className="team-modal-h2">{draft.name}</h2>

            { !(loading) ? <form onSubmit={saveEdit}>
              <div className="field">
                <label className="flabel" htmlFor="edit-name">
                  Name
                </label>
                <input
                  id="edit-name"
                  type="text"
                  value={draft.name}
                  onChange={(e) => setDraft({ ...draft, name: e.target.value })}
                  required
                />
              </div>

              <div className="field">
                <label className="flabel" htmlFor="edit-dept">
                  Position
                </label>
                <input
                  id="edit-dept"
                  type="text"
                  value={draft.position}
                  onChange={(e) => setDraft({ ...draft, position: e.target.value })}
                  required
                />
              </div>
              <div className="field">
                <label className="flabel" htmlFor="edit-email">
                  Email
                </label>
                <input
                  id="edit-email"
                  type="email"
                  value={draft.email}
                  onChange={(e) => setDraft({ ...draft, email: e.target.value })}
                  required
                />
              </div>
              {serverError && (
                <p style={{ color: "#a13d2e", fontSize: 13, marginTop: 4 }}>{serverError}</p>
              )}
              <div className="team-modal-actions">
                <button type="button" className="pill-btn" onClick={cancelEdit}>
                  Cancel
                </button>
                <button type="submit" className="pill-btn solid">
                  Save changes
                </button>
              </div>
            </form> : <Loader /> }
          </div>
        </div>
      )}

      {/* ---- delete confirm ---- */}
      {deleteId !== null && employeeToDelete && (
        <div className="team-overlay" onClick={() => setDeleteId(null)}>
          <div className="team-modal team-modal-sm" onClick={(e) => e.stopPropagation()}>
            <p className="rule-label">
              <span className="ln" />
              <span className="label" style={{ color: "var(--brass)" }}>
                Remove member
              </span>
            </p>
            <h2 className="team-modal-h2">Remove {employeeToDelete.name}?</h2>
            <p className="team-modal-copy">
              This removes them from the team directory. This can't be undone.
            </p>
            {serverError && (
              <p style={{ color: "#a13d2e", fontSize: 13, marginTop: 4 }}>{serverError}</p>
            )}
            <div className="team-modal-actions">
              <button type="button" className="pill-btn" onClick={() => setDeleteId(null)}>
                Cancel
              </button>
              <button type="button" className="pill-btn solid danger-btn" onClick={confirmDelete}>
                Remove
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  </>
  );
}

function SearchIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <circle cx="11" cy="11" r="7" />
      <path d="M21 21l-4.3-4.3" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}

function EditIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M12 20h9" />
      <path d="M16.5 3.5a2.12 2.12 0 013 3L7 19l-4 1 1-4L16.5 3.5z" />
    </svg>
  );
}

function TrashIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M3 6h18" />
      <path d="M8 6V4a1 1 0 011-1h6a1 1 0 011 1v2" />
      <path d="M19 6l-1 14a1 1 0 01-1 1H7a1 1 0 01-1-1L5 6" />
      <path d="M10 11v6M14 11v6" />
    </svg>
  );
}