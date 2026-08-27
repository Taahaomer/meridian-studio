export default function RuleLabel({ children, dark }) {
  return (
    <div
      className="rule-label label"
      style={{ color: dark ? "var(--brass-light)" : "var(--brass)" }}
    >
      <span className="ln" /> {children}
    </div>
  );
}
